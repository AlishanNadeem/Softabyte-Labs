import { get_collection, is_mongodb_configured } from "@/lib/db/mongodb";
import {
  CONTACT_COLLECTION,
  MAX_JSON_BODY_BYTES,
  SUBMISSION_STATUS_NEW,
} from "@/lib/contact/constants";
import { validate_contact_origin } from "@/lib/contact/origin";
import { enforce_contact_rate_limit } from "@/lib/contact/rate_limit";
import { evaluate_form_timing } from "@/lib/contact/timing";
import { validate_contact_submission } from "@/lib/contact/validate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

let indexes_ensured = false;

async function ensure_contact_indexes(collection) {
  if (indexes_ensured) return;

  await collection.createIndexes([
    { key: { created_at: -1 }, name: "created_at_desc" },
    {
      key: { submission_status: 1, created_at: -1 },
      name: "status_created_at",
    },
  ]);

  indexes_ensured = true;
}

function json_response(body, status = 200, extra_headers = {}) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...extra_headers,
    },
  });
}

function silent_success() {
  return json_response({
    success: true,
    message: "Your inquiry has been received.",
  });
}

export async function POST(request) {
  try {
    const content_type = request.headers.get("content-type") || "";
    if (!content_type.toLowerCase().includes("application/json")) {
      return json_response(
        {
          success: false,
          message: "Invalid request payload.",
        },
        415
      );
    }

    const content_length = Number(request.headers.get("content-length") || 0);
    if (content_length > MAX_JSON_BODY_BYTES) {
      return json_response(
        {
          success: false,
          message: "Request is too large.",
        },
        413
      );
    }

    const origin_check = validate_contact_origin(request);
    if (!origin_check.ok) {
      return json_response(
        {
          success: false,
          message: "Unable to process this request.",
        },
        403
      );
    }

    const rate = await enforce_contact_rate_limit(request);
    if (rate.limited) {
      const headers = {};
      if (rate.retry_after_seconds) {
        headers["Retry-After"] = String(rate.retry_after_seconds);
      }
      return json_response(
        {
          success: false,
          message: "Too many requests. Please try again later.",
        },
        429,
        headers
      );
    }

    let raw_body;
    try {
      raw_body = await request.json();
    } catch {
      return json_response(
        {
          success: false,
          message: "Invalid request payload.",
        },
        400
      );
    }

    if (!raw_body || typeof raw_body !== "object" || Array.isArray(raw_body)) {
      return json_response(
        {
          success: false,
          message: "Invalid request payload.",
        },
        400
      );
    }

    const result = validate_contact_submission(raw_body);

    if (result.spam) {
      // Silent discard for honeypot fills — avoid teaching bots.
      return silent_success();
    }

    const timing = evaluate_form_timing(raw_body.form_started_at);
    if (!timing.ok) {
      // Silent discard for trivial instant / invalid timing — do not reveal rules.
      return silent_success();
    }

    if (!result.valid) {
      return json_response(
        {
          success: false,
          message: "Please review the highlighted fields.",
          errors: result.errors,
        },
        400
      );
    }

    if (!is_mongodb_configured()) {
      console.error("[contact] MONGODB_URI is not configured.");
      return json_response(
        {
          success: false,
          message:
            "We could not save your inquiry right now. Please try again later.",
        },
        503
      );
    }

    const now = new Date();
    const document = {
      ...result.data,
      submission_status: SUBMISSION_STATUS_NEW,
      created_at: now,
      updated_at: now,
    };

    const collection = await get_collection(CONTACT_COLLECTION);
    await ensure_contact_indexes(collection);
    await collection.insertOne(document);

    return json_response({
      success: true,
      message: "Your inquiry has been received.",
    });
  } catch (error) {
    console.error("[contact] submission failed:", error?.name || "Error");
    return json_response(
      {
        success: false,
        message:
          "We could not save your inquiry right now. Please try again later.",
      },
      500
    );
  }
}
