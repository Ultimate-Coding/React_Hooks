import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Yoy clicked {count} times
      </button>
    </div>
  );
}

export default Counter;
