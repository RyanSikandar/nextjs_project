'use client'
import Link from "next/link"
import {useRouter} from 'next/navigation'
export default function Home() {
  
  const router = useRouter();
  const lmoa = (item)=>
  {
alert(item)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black text-2xl">
      <User name="Ryan"/>

      <Link href="/addStudent">Click to add a student</Link>
      <h1 >
        Home Page
      </h1>
      <button onClick={()=>lmoa("lmoa")}>Nigga click me </button>
      <Link href="/Login"> GO TO LOGIN PAGE NIGGA</Link>
      <button  onClick={()=>router.push("/Login")}>Go to login page using button</button>

      <br/>
      <Link href="/productList">Go to product list</Link>
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