import React, { useState, Fragment, memo, useDeferredValue } from "react";

export default function OptimizedSlowList() {
  const [value, setValue] = useState("");
  const text = useDeferredValue(value);

  return (
    <Fragment>
      <input
        type={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          background: value !== text && "red",
        }}
      />
      <Items text={text} />
    </Fragment>
  );
}

const Items = memo(() => {
  const arr = [];
  for (let i = 0; i < 100; i++) {
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
