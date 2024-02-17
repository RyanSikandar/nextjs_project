import { connection } from "@/app/lib/database";
import { Products } from "@/app/lib/schema/products";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
    let payload = await request.json()
    console.log(payload, content.params.studentname);
    let filter = { _id: content.params.studentname }
    await mongoose.connect(connection);
    console.log("Connection");
    const result = await Products.findOneAndUpdate(filter, payload)
    return NextResponse.json({ data: result, success: true })
}

export async function GET(request, content) {
    let record = { _id: content.params.studentname }
    await mongoose.connect(connection);
    console.log("Connection");
    const result = await Products.findById(record)
    return NextResponse.json({ result: result, success: true })
}

export async function DELETE(request, content) {
    const studentID = content.params.studentname;
    const record = { _id: studentID };
    await mongoose.connect(connection);
    const result = await Products.deleteOne(record);
    return NextResponse.json({result,success:true});
}