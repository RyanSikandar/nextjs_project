import UsersGet from "../../../services/getUser";

export default function UserInfo({ params }) {
  const current = params.userid;

  return (
    <div>
      <h3>User Detail Page for id : {params.userid}</h3>
    </div>
  );
}

export async function generateStaticParams() {
  const getUserList = UsersGet();
  const users = await getUserList;

  return users.map(user=>({
    userid:user.id.toString()
  }));
}
