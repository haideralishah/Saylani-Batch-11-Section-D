"use client";

import { useState } from "react";
import {UserType} from './usertype'

const users: UserType[] = [
  {
    email: "haider@gmail.com",
    password: "123456",
    userName: "haider",
    hobbies: ["swimmming", "gardening"],
    post: [
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore est neque, ducimus culpa totam numquam quibusdam maiores eius consectetur. Sed fugiat velit illo alias a pariatur? Aspernatur, non laboriosam?",
        likes: 10,
      },
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore est neque, ducimus culpa totam numquam quibusdam maiores eius consectetur. Sed fugiat velit illo alias a pariatur? Aspernatur, non laboriosam?",
        likes: 15,
      },
    ],
  },
  {
    email: "abdullah@gmail.com",
    password: "123456",
    userName: "abdullah",
    hobbies: ["gym", "video games"],
    post: [
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore est neque, ducimus culpa totam numquam quibusdam maiores eius consectetur. Sed fugiat velit illo alias a pariatur? Aspernatur, non laboriosam?",
        likes: 10,
      },
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore est neque, ducimus culpa totam numquam quibusdam maiores eius consectetur. Sed fugiat velit illo alias a pariatur? Aspernatur, non laboriosam?",
        likes: 15,
      },
    ],
  },
];

type LoginType = {
  authenticate: (auth: boolean) => void;
  setUser: (user: UserType) => void;
};

export default function Login({ authenticate, setUser }: LoginType) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    let [userFound] = users.filter(
      (user) => email === user.email && password === user.password
    );
    if (userFound) {
      authenticate(true);
      setUser(userFound);
    }
  };

  return (
    <>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>
      <br />
      <button onClick={loginHandler}>Login</button>
    </>
  );
}
