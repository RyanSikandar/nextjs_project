import Link from "next/link";
import DeleteUser from "../util/delete_button"

async function getUsers() {
  let data = await fetch("http://localhost:3000/clients");
  data = await data.json();
  return data;
}

export default async function Page() {
  let users = await getUsers();
  console.log(users);
  return (
    <div>
      <h1>User List:</h1>
      {users.map((item) => (
        <div>
          <Link href={`members/${item.name}`}>{item.name}</Link>
          <span className="ml-2"><Link href={`members/${item.name}/update`}>Edit</Link></span>
          <span className="ml-4"><DeleteUser id={item.name}/></span>
        </div>
      ))}
    </div>
  );
}
