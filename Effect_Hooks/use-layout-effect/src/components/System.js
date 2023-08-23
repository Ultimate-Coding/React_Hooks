import React, { useState, useEffect, useLayoutEffect } from "react";

function System() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    console.log("from useEffect");

    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useLayoutEffect(() => {
    console.log("from useLayoutEffect");
  }, []);

  console.log("from rendering code");

  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

export default System;

// import React, { useState, useEffect } from "react";

// function System() {
//   const [isOnline, setIsOnline] = useState(navigator.onLine);

//   useEffect(() => {
//     function handleOnline() {
//       setIsOnline(true);
//     }

//     function handleOffline() {
//       setIsOnline(false);
//     }

//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);

//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, []);
//   return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
// }

// export default System;
