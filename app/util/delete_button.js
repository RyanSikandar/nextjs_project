"use client"
export default function DeleteUser(props)
{
    const userId = "prop";
    console.log(userId);
    const deleteuser =async()=>{
        let result = await fetch("http://localhost:3000/clients/"+userId,{
        method:"delete"})
        result = await result.json();
        if(result.success){
            alert("user deleted successfully");
        }
        else{
            alert("stop the cap")
        }
    }
  
    return <button onClick={deleteuser}>Delete</button>
}
