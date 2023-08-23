import { useState, useEffect, useDebugValue } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);
  useDebugValue(count);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return count;
}
