import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE } from "@/lib/admin/constants";

/**
 * Lightweight edge gate: require session cookie presence for /admin/*
 * except login. Full session validation happens in server layouts/actions.
 */
export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const is_login =
    pathname === "/admin/login" || pathname === "/admin/login/";

  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  const response = NextResponse.next();

  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  response.headers.set("Cache-Control", "no-store");

  if (is_login) {
    if (token) {
      return NextResponse.redirect(new URL("/admin/", request.url));
    }
    return response;
  }

  if (!token) {
    const login_url = new URL("/admin/login/", request.url);
    login_url.searchParams.set("next", pathname);
    return NextResponse.redirect(login_url);
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
