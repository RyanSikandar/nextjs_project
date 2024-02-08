"use client"

import { useState } from "react"

export default function page() {
    const [classs, setClasss] = useState("");
    const [name,setName]=useState("");


    const addStudent = async() => {
        console.log(name,classs);
        let result = await fetch("http://localhost:3000/api/projects",{
            method:"POST",
            body:JSON.stringify({name,classs})
        });
        result = await result.json();
        if(result.success)
        {
            alert("Student Added to class");
        }
        else alert("Error");
    }
    return (
        <div className="text-black">
            <h1 className="text-white">Hello jee</h1>
            <input type="text" placeholder="Enter Student name" value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
            <input type="text" placeholder="Enter Student class" onChange={(e)=>setClasss(e.target.value)} value={classs} /><br/><br/>
            <button className="text-white" onClick={addStudent}>
                Add Student
            </button>
        </div>)
}