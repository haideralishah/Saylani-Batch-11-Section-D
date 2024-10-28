"use client";
import Divide from "@/components/divide";
import Subtraction from "@/components/minus";
import Multiply from "@/components/multiply";
import NumberInput from "@/components/number-input";
import Sum from "@/components/sum";
import { useEcommerceStore } from "@/store/ecommerce-example-store";
import { useEffect, useState } from "react";

export default function Home() {
  // const [products, setProducts] = useState([]);
 

 
  return (
    <>
      <NumberInput />
      <Sum />
      <Subtraction />
      <Multiply />
      <Divide />
    </>
  );
}
