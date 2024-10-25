"use client";

import { useEcommerceStore } from "@/store/ecommerce-example-store";
import { useCallback } from "react";

export default function Cart() {
    const products = useEcommerceStore((store) => store.products);



    return (
        <>
            {products.map(({ name, price }, index) => (
                <div key={name + index} style={{ border: "1px solid black", width: "20%", margin: "15px", padding: "15px", textAlign: 'center' }}>
                    <h3>{name}</h3>
                    <h3>{price}</h3>
                    <button onClick={() => { updateCart(index) }}>Add To Cart</button>
                </div>
            ))}
        </>

    )
}