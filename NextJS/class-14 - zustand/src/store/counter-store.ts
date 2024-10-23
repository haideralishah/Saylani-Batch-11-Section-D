import { create } from "zustand";

export const useCounterStore = create((set) => ({
  num1: 10,
  num2: 10,
  modifyAllNums: (num1: number, num2: number) => set({ num1, num2 }),
  modifyNum1: (num1: number) => set({ num1 }),
}));
