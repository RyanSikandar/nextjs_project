export default async function UsersGet() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
}
