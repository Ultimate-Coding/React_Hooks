import React, { useState, Fragment } from "react";

function UpdaterFun() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  const handleClickWithUpdater = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  return (
    <Fragment>
      <button onClick={handleClick}>Yoy clicked {count} times</button>
      <button onClick={handleClickWithUpdater}>
        Yoy clicked {count} times using updater function
      </button>
    </Fragment>
  );
}

export default UpdaterFun;
