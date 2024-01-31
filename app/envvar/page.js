export default function envvar() {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV == "development") {
    return <h1>lmoa</h1>;
  }
  else 
  {
    return <div><h2>Not in development mode.</h2></div>;
  }
}
