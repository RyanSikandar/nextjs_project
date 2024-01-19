async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function serverProduct() {
    let products = await productList();
    console.log(products);
  return (
    <>
      <div>Fetching data using server</div>
      <div>{
        products.map((item) => (
          <h3 key={item.id}>
            Title: {item.title}
          </h3>
        ))
      }</div>
    </>
  );
}
