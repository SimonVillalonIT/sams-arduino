import { NextResponse, type NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { origin, pathname } = new URL(req.url);

  if (session && ["/login", "/register"].includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", origin));
  }

  if (!session && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", origin));
  }

  return res;
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
