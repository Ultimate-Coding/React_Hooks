import React, { Fragment, useRef, useState } from "react";

function Watch() {
  const [count, setCount] = useState(0);

  const ref = useRef(null);

  const handleStart = () => {
    ref.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  console.log(count);

  const handleStop = () => {
    clearInterval(ref.current);
  };
  return (
    <Fragment>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <p>{count}</p>
    </Fragment>
  );
}

export default Watch;
