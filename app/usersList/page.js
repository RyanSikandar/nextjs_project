import UsersGet from "../../services/getUser"
import Link from "next/link"
export default async function Page(){
    const getUserList = UsersGet();
    const users = await getUserList;
    console.log(users)
    return(
        <div>
            <h1>
                Users List
                {
                    users.map((user)=>(
                        <h2>
                            <Link href={`/usersList/${user.id}`}>{user.name}</Link>
                        </h2>
                    ))
                }
            </h1>
        </div>
    )

}