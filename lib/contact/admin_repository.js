import { ObjectId } from "mongodb";
import { get_collection, is_mongodb_configured } from "@/lib/db/mongodb";
import {
  CONTACT_COLLECTION,
  CONTACT_STATUS_OPTIONS,
} from "@/lib/contact/constants";
import { ADMIN_PAGE_SIZE } from "@/lib/admin/constants";
import { is_valid_object_id } from "@/lib/blog/validation";

function serialize_submission(document) {
  if (!document) return null;
  return {
    id: String(document._id),
    full_name: document.full_name || "",
    email: document.email || "",
    phone: document.phone || null,
    company_name: document.company_name || null,
    service_interest: document.service_interest || "",
    budget_range: document.budget_range || null,
    project_description: document.project_description || "",
    preferred_contact_method: document.preferred_contact_method || null,
    source_page: document.source_page || "",
    submission_status: document.submission_status || "new",
    created_at: document.created_at || null,
    updated_at: document.updated_at || null,
  };
}

export async function admin_list_contact_submissions({
  status = "all",
  search = "",
  page = 1,
  page_size = ADMIN_PAGE_SIZE,
} = {}) {
  if (!is_mongodb_configured()) {
    return { submissions: [], total: 0, page: 1, page_size, total_pages: 1 };
  }

  const collection = await get_collection(CONTACT_COLLECTION);
  const query = {};

  if (CONTACT_STATUS_OPTIONS.includes(status)) {
    query.submission_status = status;
  }

  const trimmed_search = String(search || "").trim().slice(0, 80);
  if (trimmed_search) {
    const escaped = trimmed_search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    query.$or = [
      { full_name: { $regex: escaped, $options: "i" } },
      { email: { $regex: escaped, $options: "i" } },
      { company_name: { $regex: escaped, $options: "i" } },
    ];
  }

  const safe_page = Math.max(1, Number(page) || 1);
  const skip = (safe_page - 1) * page_size;

  const [total, documents] = await Promise.all([
    collection.countDocuments(query),
    collection
      .find(query)
      .sort({ created_at: -1 })
      .skip(skip)
      .limit(page_size)
      .toArray(),
  ]);

  return {
    submissions: documents.map(serialize_submission),
    total,
    page: safe_page,
    page_size,
    total_pages: Math.max(1, Math.ceil(total / page_size)),
  };
}

export async function admin_get_contact_submission(id) {
  if (!is_valid_object_id(id) || !is_mongodb_configured()) return null;
  const collection = await get_collection(CONTACT_COLLECTION);
  const document = await collection.findOne({ _id: new ObjectId(id) });
  return serialize_submission(document);
}

export async function admin_update_contact_status(id, submission_status) {
  if (!is_valid_object_id(id)) {
    return { ok: false, message: "Invalid submission id." };
  }
  if (!CONTACT_STATUS_OPTIONS.includes(submission_status)) {
    return { ok: false, message: "Invalid status." };
  }

  const collection = await get_collection(CONTACT_COLLECTION);
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        submission_status,
        updated_at: new Date(),
      },
    }
  );

  if (!result.matchedCount) {
    return { ok: false, message: "Submission not found." };
  }

  return { ok: true };
}

export async function admin_delete_contact_submission(id) {
  if (!is_valid_object_id(id)) {
    return { ok: false, message: "Invalid submission id." };
  }
  const collection = await get_collection(CONTACT_COLLECTION);
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  if (!result.deletedCount) {
    return { ok: false, message: "Submission not found." };
  }
  return { ok: true };
}

export async function admin_count_contact_submissions() {
  if (!is_mongodb_configured()) {
    return { new_count: 0, total: 0 };
  }
  const collection = await get_collection(CONTACT_COLLECTION);
  const [new_count, total] = await Promise.all([
    collection.countDocuments({ submission_status: "new" }),
    collection.countDocuments({}),
  ]);
  return { new_count, total };
}
