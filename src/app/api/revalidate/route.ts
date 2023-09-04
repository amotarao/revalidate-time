import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET():Promise<NextResponse> {
  revalidateTag('now');
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
