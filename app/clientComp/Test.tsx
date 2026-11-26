"use client";

import { useRef, useState, useEffect } from "react";

const Test = () => {
  console.log(2222);

  const [count, setCount] = useState(0);
  const [test, setTest] = useState(10);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("Render count:", renderCount.current);
  });

  useEffect(() => {
    setTimeout(() => {
      console.log("settimeout", 222);
      setTest(20);
    }, 5000);
  }, []);

  return (
    <div>
      <p>
        Count: {count} test: {test}
      </p>
      <button
        onClick={() => {
          // setTest((prev) => prev + 10);
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Test;
