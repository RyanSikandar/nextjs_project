import { connection } from "@/app/lib/database";
import { Products } from "@/app/lib/schema/products";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let data = []
    try {
        await mongoose.connect(connection);
        console.log('Connected to MongoDB');
        data = await Products.find();
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        data = { success: false, error: error.message };
    }
    
    return NextResponse.json({ result: data });
}