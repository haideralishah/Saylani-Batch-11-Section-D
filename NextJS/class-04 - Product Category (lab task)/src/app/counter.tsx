"use client";

import { useState } from "react";

type CounterType = {
  message: string;
  count: number;
};

type ErrorType = {
  type: string;
  message: string;
};

export default function Counter({ message, count }: CounterType) {
  const [initCount, setInitCount] = useState(count);
  const [userName, setUserName] = useState("");

  const [error, setError] = useState<ErrorType>({
    type: "error",
    message: "You are not listed in our system.",
  });

  const countHandler = () => {
    setInitCount(initCount + 1);
  };

  const userNameHandler = (event: any) => {
    setUserName(event.target.value);
  };

  const toggleErrorHandler = () => {
    if (error.type === "warning") {
      setError({ 
        type: "error", 
        message: "You are not listed in our system." 
      });
    } 
    else {
      setError({
        type: "warning",
        message: "Please wear your ID card.",
      });
    }
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

      {userName.length >= 3 ? (
        <h2>Welcome {userName}</h2>
      ) : (
        <h2>Please enter your name.</h2>
      )}

      <h2
        style={
          error.type === "warning"
            ? { backgroundColor: "#d3d30c", color: "red" }
            : { backgroundColor: "red", color: "white" }
        }
      >
        {error.message}
      </h2>

      <button onClick={toggleErrorHandler}>Toggle Error Message</button>

      <h3>{initCount}</h3>
      <button onClick={countHandler}>Add</button>
    </>
  );
}
