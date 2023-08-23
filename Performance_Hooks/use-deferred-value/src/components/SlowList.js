import React, { useState, Fragment, memo } from "react";

export default function SlowList() {
  const [value, setValue] = useState("");

  return (
    <Fragment>
      <input type={value} onChange={(e) => setValue(e.target.value)} />
      <Items text={value} />
    </Fragment>
  );
}

const Items = memo(() => {
  const arr = [];
  for (let i = 0; i < 100000; i++) {
    arr.push(i);
  }

  return (
    <>
      {arr.map((item) => (
        <p key={item}>{`item ${item}`}</p>
      ))}
    </>
  );
});
