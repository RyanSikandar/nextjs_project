import { NextResponse } from "next/server";
import { user } from "../util/db";

export function GET(request) {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(request) {
  let payload = await request.json();
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "required field not found", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { name: "New User Created", success: true },
    { status: 201 }
  );
}
