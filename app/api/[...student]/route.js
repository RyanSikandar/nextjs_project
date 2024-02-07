import StudentDetails from "@/app/studentList/[student]/page";
import { NextResponse } from "next/server";

export async function GET(req,content){
    console.log(content);
    let StudentDetails = content.params.student;
    console.log(StudentDetails);

    return NextResponse.json("All routes catched");

}