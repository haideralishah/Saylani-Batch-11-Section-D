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
  products: initialProducts,
  cart: [],
  updateCart: (cart: any[]) => set({ cart }),
}));
