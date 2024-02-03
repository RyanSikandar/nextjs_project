async function getUser(props) {
  let data = await fetch(`http://localhost:3000/clients/${props}`);
  data = await data.json();
  return data.result;
}

export default async function Page({ params }) {
  console.log(params.membername);
  let user = await getUser(params.membername);
  console.log(user);
  return (
    <h2>
      User Details: <h2>{user.name} {user.email}</h2>
    </h2>
  );
}
