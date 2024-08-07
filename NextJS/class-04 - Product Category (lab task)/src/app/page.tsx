/*
React.FC
React.ReactNode
*/
"use client";

import { useEffect, useState } from "react";
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
    name: 'Mehran',
    price: 2000,
    category: "Cars"
  },
  {
    id: 6,
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
  const [selectedCat, setSelectedCat] = useState("All")

  useEffect(() => {
    console.log('Hello World');
  }, []);

  useEffect(() => {

    let shortListedProd = products.filter(({ category }) => (
      selectedCat === "All" || category === selectedCat
    ))
    setFilteredProd(shortListedProd);

  }, [selectedCat])

  const sortByPrice = ()=>{
    let sortedProduct = filteredProd.sort((a, b)=> b.price - a.price);
    setFilteredProd([...sortedProduct]);
  }

  return (
    <>
      <MyInfo />
      <button onClick={sortByPrice}>Sort Price</button>
      <Categories
        categories={categList}
        selectCategoryState={setSelectedCat}
      />
      <AllProducts
        productsList={filteredProd}
      />
    </>
  );
}
