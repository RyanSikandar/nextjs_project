import { NextResponse } from "next/server";
import { user } from "../../util/db";

export function GET(request, content) {
  console.log(content.params.clientname);
  const data = user;

  const userData = data.filter(
    (item) => item.name == content.params.clientname
  );
  return NextResponse.json(
    userData.length == 0 ? { result: "No Data found" } : {result: userData},
    {status: 200} 
  );
}
