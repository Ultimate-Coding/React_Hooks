import React, { useRef } from "react";

function Counter() {
  const ref = useRef(0);
  return (
    <button
      onClick={() => {
        ref.current++;
        alert(ref.current);
      }}
    >
      Click
    </button>
  );
}

export default Counter;
