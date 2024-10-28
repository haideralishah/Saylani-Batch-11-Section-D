"use client";

import { useEcommerceStore } from "@/store/ecommerce-example-store";
import { useEffect } from "react";
import EcommerceExample from "../app/ecommerce-example/page";

export default function Products() {
  const updateProducts = useEcommerceStore((store) => store.updateProducts);
  const products = useEcommerceStore((store) => store.products);
  const cart = useEcommerceStore((store) => store.cart);
  const updateCart = useEcommerceStore((store) => store.updateCart);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let response = await fetch("https://dummyjson.com/products");
    let { products: productsData } = await response.json();
    updateProducts(productsData.slice(0, 3));
  };

  const addToCart = (product) => {
    if ([product.id] in cart) {
      cart[product.id].qty = cart[product.id].qty + 1;
    } else {
      const newItem = { ...product, qty: 1 };
      cart[product.id] = newItem;
    }
    updateCart(cart);
  };

  return (
    <>
      {products.map((product, index) => (
        <div
          key={product.id}
          style={{
            border: "1px solid black",
            width: "20%",
            margin: "15px",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <h3>{product.title}</h3>
          <h3>{product.price}</h3>
          <button
            onClick={() => {
              addToCart(product);
            }}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </>
  );
}
