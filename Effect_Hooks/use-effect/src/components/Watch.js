import React, { useState, useEffect } from "react";

function Watch() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const watch = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      console.log(count);

      clearInterval(watch);
    };
  }, []);

  return <p>{count}</p>;
}

export default Watch;

// import React, { Fragment, useRef, useState } from "react";

// function Watch() {
//   const [count, setCount] = useState(0);

//   const ref = useRef(null);

//   const handleStart = () => {
//     ref.current = setInterval(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   };

//   console.log(count);

//   const handleStop = () => {
//     clearInterval(ref.current);
//   };
//   return (
//     <Fragment>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//       <p>{count}</p>
//     </Fragment>
//   );
// }

// export default Watch;
