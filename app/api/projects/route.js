import { connection } from "@/app/lib/database";
import { Products } from "@/app/lib/schema/products";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let data = []
    try { 
        await mongoose.connect(connection) 
        console.log("GET API")
        data = await Products.find();
    } catch (error) {
        console.error('Error:', error);
        data = { success: false, error: error.message };
    }
    return NextResponse.json({ result: data });
}

export async function POST(request){
    await mongoose.connect(connection) 
    console.log("POST API")
    const payload = await request.json();
    let product = new Products(payload);

    const result = await product.save();
    return NextResponse.json({result,success:true});
}