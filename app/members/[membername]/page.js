async function getUser(props) {
  let data = await fetch(`http://localhost:3000/clients/${props}`);
  data = await data.json();
  return data.result;
}

export default async function Page({ params }) {
  console.log(params.membername);
  let user = await getUser(params.membername);
  user=user[0];
  console.log(user);
  return (
    <h2>
      User Details:{" "}
      <h2>
      <br/>
      <br/>
        User Name: {user.name} <br/>
        User Email: {user.email}
      </h2>
    </h2>
  );
}
