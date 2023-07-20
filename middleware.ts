import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // const userToken = request.cookies.get("google_auth")?.value;

  // if (pathname !== undefined) {
  //   if (!userToken) {
  //     return NextResponse.redirect(new URL("/login", request.nextUrl));
  //   } else {
  //     return NextResponse.next();
  //   }
  // }
}

export const config = {
    matcher: '/',
}
// Supports both a single string value or an array of matchers
