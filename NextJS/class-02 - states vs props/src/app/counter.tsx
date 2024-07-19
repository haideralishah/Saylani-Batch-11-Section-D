"use client";

import { useState } from "react";

type CounterType = {
  message: string;
  count: number;
};

export default function Counter({ message, count }: CounterType) {
  const [initCount, setInitCount] = useState(count);
  const [userName, setUserName] = useState("");

  const countHandler = () => {
    setInitCount(initCount + 1);
  };

  const userNameHandler = (event: any) => {
    setUserName(event.target.value);
  };

  return (
    <>
      <h1>{message}</h1>
      <input
        type="text"
        value={userName}
        // onChange={userNameHandler}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />

      <h2>Welcome {userName}</h2>
      <h3>{initCount}</h3>
      <button onClick={countHandler}>Add</button>
    </>
  );
}
