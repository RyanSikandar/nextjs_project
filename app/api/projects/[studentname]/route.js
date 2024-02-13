import { connection } from "@/app/lib/database";
import { Products } from "@/app/lib/schema/products";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request,content){
let payload = await request.json()
console.log(payload,content.params.studentname);
let filter = {_id:content.params.studentname}
await mongoose.connect(connection);
console.log("Connection");
const result = await Products.findOneAndUpdate(filter,payload)
return NextResponse.json({result:"lmao",success:true})
}