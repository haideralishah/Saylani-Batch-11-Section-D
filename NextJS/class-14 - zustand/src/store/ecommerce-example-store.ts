import { create } from "zustand";

const initialProducts = [
  {
    price: 5000,
    name: "mobile",
  },
  {
    price: 7000,
    name: "macbook",
  },
];

export const useEcommerceStore = create((set) => ({
  products: [],
  cart: {},
  updateCart: (cart) => set({ cart }),
  updateProducts: (products) => set({ products })
}));
