"use client";

import { useProductContext } from "@/context/product-context";



export default function Home() {
  const { products, fetchProducts } = useProductContext()!;

  // const products = () => {
  //   const products = useProductContext()
  //   if (products) {
  //     return {
  //       fetchProducts: products?.fetchProducts,
  //       products: products?.products
  //     }
  //   }
  // }

  return (

    <h1>        hello world      </h1>

  );
}



