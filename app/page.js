'use client'
export default function Home() {
  const lmoa = (item)=>
  {
alert(item)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black text-2xl">
      <User name="Ryan"/>

      <User name="Sammy"/>
      <h1 >
        Home Page
      </h1>
      <button onClick={()=>lmoa("lmoa")}>Nigga click me </button>
    </main>
  )
}

const User = (props) =>{
  return (
    <div>
      <p>Hello, user! {props.name}</p>
      </div>
  )
}