"use client";

import { useCounterStore } from "@/store/counter-store";
import { useState } from "react";

export default function NumberInput() {

    // const {
    //     num1: num1Store,
    //     num2: num2Store,
    //     modifyNum1,
    //     modifyNum2
    // } = useCounterStore((store) => store);

    const {
        num1: num1Store,
        num2: num2Store,
        modifyAllNums
    } = useCounterStore();


    const [num1, setNum1] = useState(num1Store);
    const [num2, setNum2] = useState(num2Store);

    return (<>
        <label>
            Num 1:
            <input
                type="text"
                value={num1}
                onChange={(e) => { setNum1(Number(e.target.value)) }}
            />
        </label>
        <br />
        <label>
            Num 2:
            <input
                type="text"
                value={num2}
                onChange={(e) => { setNum2(Number(e.target.value)) }}
            />
        </label>
        <br /> <br />
        <button onClick={() => {
            modifyAllNums(num1, num2)
        }}>Update in Store</button>
    </>)
}
