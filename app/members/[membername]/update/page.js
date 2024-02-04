"use client";
import "./style_adduser.css";
import { useState, useEffect } from "react";

export default function Page({ params }) {
  let id = params.membername;
  console.log(params.membername);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let data = await fetch("http://localhost:3000/clients/" + id);
    data = await data.json();
    setName(data.result[0].name);
    setAge(data.result[0].age);
    setEmail(data.result[0].email);
  };

  const updateUser = async () => {
    console.log(name, age, email);
    let result = await fetch("http://localhost:3000/clients/" + id, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    console.log(result);
    if(result.success)
    {
        alert("User Info Updated");
    }
  };

  return (
    <div>
      <h1>Update User Details</h1>
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

        <button className=".btn" onClick={updateUser}>
          Change Values
        </button>
      </div>
    </div>
  );
}
