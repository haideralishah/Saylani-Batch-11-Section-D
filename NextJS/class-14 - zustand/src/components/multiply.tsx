"use client";

import { useCounterStore } from "@/store/counter-store";

export default function Multiply() {
    const num1 = useCounterStore(store => store.num1);
    const num2 = useCounterStore(store => store.num2);

    return <h1>Multiply of both number: {num1 * num2}</h1>
}