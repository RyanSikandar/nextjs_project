import { NextResponse } from "next/server";
import { user } from "../../util/db";

export function GET(request, content) {
  const data = user;

  const userData = data.filter(
    (item) => item.name == content.params.clientname
  );
  return NextResponse.json(
    userData.length == 0 ? { result: "No Data found" } : { result: userData },
    { status: 200 }
  );
}

export async function PUT(req, content) {
  let payload = await req.json();
  console.log(payload)
  console.log(content)
  payload.name = content.params.clientname
  console.log(payload)
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "required field not found", success: false },
      { status: 400 }
    );
  }
  else
  return NextResponse.json({result:payload,success:true},{status:200})
}
