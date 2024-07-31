/*
React.FC
React.ReactNode
*/
"use client";

import { useState } from "react";
import AllProducts from "./all-products";
import Categories from "./categories";
import MyInfo from "./myinfo";
import { ProductItemType } from "./product-item-type";

const products: ProductItemType[] = [
  { 
    id: 1, 
    name: 'Iphone 15 Promax', 
    price: 2500, 
    category: "Mobile Phones" 
  },
  {
    id: 2, 
    name: 'Macbook', 
    price: 2500, 
    category: "Computers" 
  },
  { 
    id: 3, 
    name: 'Air Pod', 
    price: 25, 
    category: "Gadgets" 
  },
  { 
    id: 4, 
    name: 'Tesla Cybertruck', 
    price: 65000, 
    category: "Cars" 
  },
  { 
    id: 5, 
    name: 'Special Eid Nara of J.', 
    price: 25, 
    category: "Cloths" 
  },
]



export default function Home() {
  const [categList, setCategList] = useState(
    [
      "All",
      'Cars',
      "Mobile Phones",
      "Gadgets",
      "Computers",
      "Cloths"
    ]);
  const [filteredProd, setFilteredProd] = useState(products);

  return (
    <>
      <MyInfo />
      <Categories
        categories={categList}
      />
      <AllProducts 
        productsList={filteredProd}
      />
    </>
  );
}
