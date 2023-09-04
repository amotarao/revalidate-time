import { NextResponse } from "next/server";

export async function GET():Promise<NextResponse> {
  return NextResponse.json({ now: Date.now() });
}
