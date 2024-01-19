"use client"
import { useState, useEffect } from "react";

export default function Page() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
        setProduct(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to fetch data

  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h1>Product List: </h1>
      {
        product.map((item) => (
          <h3 key={item.id}>
            Title: {item.title}
          </h3>
        ))
      }
    </div>
  );
}
