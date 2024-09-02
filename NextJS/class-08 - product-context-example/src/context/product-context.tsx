"use client";

import { createContext, useContext, useState } from "react";

type ProductType = {
    id: string,
    name: string,
    category: string,
    price: number
}

type ProductContextType = {
    products: ProductType[];
    fetchProducts: (products: ProductType[]) => void;
}

let productsData = [
    {
        id: '1',
        name: 'Macbook',
        price: 3500,
        category: 'laptops',
    },
    {
        id: '2',
        name: 'iphone',
        price: 1600,
        category: 'Mobile Phone',
    }
]

const ProductContext = createContext<null | ProductContextType>(null);

export default function ProductContextProvider(
    { children }: { children: React.ReactNode }
) {

    const [products, setProducts] = useState<ProductType[]>(productsData);


    const fetchProducts = (newProducts: ProductType[]) => {
        setProducts([...products, ...newProducts]);
    }

    return (
        <ProductContext.Provider value={{ products, fetchProducts }}>
            {children}
        </ProductContext.Provider>
    )

}


export const useProductContext = () => useContext(ProductContext);