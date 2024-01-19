import Link from "next/link"
export default function StudentList()
{
    const list = ["Ryan", "sami", "umaima","shafe","panda"]
    return(
        <div>
            <h1>Student List</h1>
            <br/>
            <br/>
            <ul>
                {list.map((index)=>{
                    return <li>{<Link href={`/studentList/${index}`}>{index}</Link>}</li>
                })}
                
                
            </ul>
        </div>
    )
}