import React from "react";
import { useState } from "react";

const Counter: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);

  const addOneHandler = () => {
    setCount((previousState) => previousState + 1);
  };
  return (
    <>
      <button onClick={addOneHandler}>Add one</button>
      <div role="contentinfo">Count is {count}</div>
    </>
  );
};

export default Counter;
