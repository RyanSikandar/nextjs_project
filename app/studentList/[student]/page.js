"use client";
export default function StudentDetails({ params }) {
  console.log(params);
  return (
    <div>
      <h1>Student Details</h1>
      <h4>Name : {params.student}</h4>
    </div>
  );
}