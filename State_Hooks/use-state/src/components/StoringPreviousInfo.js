import React, { useState, Fragment } from "react";

function StoringPreviousInfo() {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState(null);

  if (count !== prevCount) {
    setPrevCount(count);
    setTrend(count > prevCount ? "increasing" : "decreasing");
  }

  return (
    <Fragment>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      {count}
      {trend && <p>The count is {trend}</p>}
    </Fragment>
  );
}

export default StoringPreviousInfo;
