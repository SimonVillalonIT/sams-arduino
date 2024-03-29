import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (!code) return NextResponse.redirect(requestUrl.origin);

  const supabase = createRouteHandlerClient<Database>({ cookies });
  await supabase.auth.exchangeCodeForSession(code);

  return NextResponse.redirect(`${requestUrl.origin}/dashboard`);
}
