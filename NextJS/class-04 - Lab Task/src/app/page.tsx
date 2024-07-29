/*
React.FC
React.ReactNode
*/
"use client";

import { useState } from "react";
import AllProducts from "./all-products";
import Categories from "./categories";
import MyInfo from "./myinfo";

export default function Home() {
  const [categList, setCategList] = useState(
    [
      'Cars', 
      "Mobile Phones", 
    "Gadgets", 
    "Computers",
    "Cloths"
  ]);


  return (
    <>
      <MyInfo />
      <Categories 
        categories={categList}
      />
      <AllProducts />
    </>
  );
}
