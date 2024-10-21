"use client";

import { db } from "@/firebase/firebaseconfig";
import { collection, doc, setDoc } from "firebase/firestore";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("");
  const [allNumbers, setAllNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  useEffect(() => {
    saveData();
  }, []);
  const saveData = async () => {
    const citiesRef = collection(db, "cities");

    await setDoc(doc(citiesRef, "SF"), {
      name: "San Francisco",
      state: "CA",
      country: "USA",
      capital: false,
      population: 860000,
      regions: ["west_coast", "norcal"],
    });
    await setDoc(doc(citiesRef, "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
      capital: false,
      population: 3900000,
      regions: ["west_coast", "socal"],
    });
    await setDoc(doc(citiesRef, "DC"), {
      name: "Washington, D.C.",
      state: null,
      country: "USA",
      capital: true,
      population: 680000,
      regions: ["east_coast"],
    });
    await setDoc(doc(citiesRef, "TOK"), {
      name: "Tokyo",
      state: null,
      country: "Japan",
      capital: true,
      population: 9000000,
      regions: ["kanto", "honshu"],
    });
    await setDoc(doc(citiesRef, "BJ"), {
      name: "Beijing",
      state: null,
      country: "China",
      capital: true,
      population: 21500000,
      regions: ["jingjinji", "hebei"],
    });
  };

  const printSomething = useCallback(() => {
    console.log("count:", count);
  }, [count]);

  const findEvenNumbers = useMemo(() => {
    let allEvenNumbers = allNumbers.filter((num) => num % 2 === 0);
    return allEvenNumbers;
  }, [allNumbers]);

  return (
    <>
      <h1>{count}</h1>
      <h2>{findEvenNumbers.join(", ")}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
      <button onClick={printSomething}>Print Something</button>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />

      <button
        onClick={() => {
          setAllNumbers([100, 129, 145, 160]);
        }}
      >
        Change Numbers Array
      </button>
    </>
  );
}
