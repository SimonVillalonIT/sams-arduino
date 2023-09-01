import { NextResponse, type NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { origin, pathname } = new URL(req.url);

  if (session && ["/auth/login", "/auth/register"].includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", origin));
  }

  if (!session && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", origin));
  }

  return res;
}

export const config = {
  matcher: ["/auth/login", "/auth/register", "/dashboard/:path*"],
};
