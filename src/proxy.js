import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

const protectedRoutes = [
  "/all-pets",
  "/dashboard",
  "/dashboard/add-pet",
  "/dashboard/my-listing",
  "/dashboard/my-request",
];

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { pathname } = request.nextUrl;

  if (!session && protectedRoutes.includes(pathname)) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: "/:path*",
};
