"use client";
import { useState } from "react";
import "./style_adduser.css";
export default function page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const addUser = async () => {
    let data = await fetch("http://localhost:3000/clients", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    data = await data.json();
    console.log(data);
    if(data.success){
        alert("New user added");
    }
    else
    {alert("Error with data entry");}
  };
  return (
    <div>
      <h1 className=".add-user">Add new user</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      ></input>
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        type="text"
        placeholder="Enter Age"
        className="input-field"
      ></input>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter Email"
        className="input-field"
      ></input>

      <button className=".btn" onClick={addUser}>
        Add User
      </button>
    </div>
  );
}
