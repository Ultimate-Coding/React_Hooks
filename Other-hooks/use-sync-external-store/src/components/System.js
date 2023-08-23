import React, { useSyncExternalStore } from "react";

function System() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);

  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function getSnapshot() {
  return navigator.onLine;
}

function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
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
