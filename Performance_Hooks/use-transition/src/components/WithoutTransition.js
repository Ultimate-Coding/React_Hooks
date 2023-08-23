import React, { useState, Fragment } from "react";

export default function WithoutTransition() {
  const [value, setValue] = useState("");

  return (
    <Fragment>
      <button onClick={() => setValue("items")}>items</button>

      <button onClick={() => setValue("products")}>products</button>

      {value === "items" ? <Items /> : <Products />}
    </Fragment>
  );
}

const Items = () => {
  const arr = [];
  for (let i = 0; i < 100000; i++) {
    arr.push(i);
  }

  return (
    <>
      {arr.map((item) => (
        <p key={item}>{`item ${item}`}</p>
      ))}
      <p>finish</p>
    </>
  );
};

const Products = () => {
  console.log("Products");
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(i);
  }

  return (
    <>
      {arr.map((product) => (
        <p key={product}>{`product ${product}`}</p>
      ))}
    </>
  );
};
