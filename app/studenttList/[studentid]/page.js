"use client"

import { useEffect, useState } from "react"

export default function page({ params }) {
    const [classs, setClasss] = useState("");
    const [name, setName] = useState("");
    const id = params.studentid
    useEffect(() => {
        getproductData();
    }, []);
    const getproductData = async () => {
        let productData = await fetch("http://localhost:3000/api/projects/" + id);
        productData = await productData.json();
        if(productData.success)
        {
            setName(productData.result.name)
            setClasss(productData.result.class)
        }
        console.log(productData)
    }
     const updateStudent = async() => {
        console.log(name,classs);
        let result = await fetch("http://localhost:3000/api/projects/" + id,{
            method:"PUT",
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
            <h1 className="text-white">Update Student Page</h1>
            <input type="text" placeholder="Enter Student name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
            <input type="text" placeholder="Enter Student class" onChange={(e) => setClasss(e.target.value)} value={classs} /><br /><br />
            <button className="text-white" onClick={updateStudent}>
                Update Student
            </button>
        </div>)
}