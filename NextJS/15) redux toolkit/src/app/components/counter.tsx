"use client"
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { decrement, increment } from '@/lib/slices/counterSlice';
import { RootState } from '@/lib/store';
import React from 'react'

export default function Counter() {
    const counter = useAppSelector((state: RootState) => state?.counter?.count);
    const dispatch = useAppDispatch()

    


    return (
        <div className='h-screen w-full flex justify-center items-center flex-col'>
            <h1 className='text-3xl font-bold'>Counter {counter}</h1>
            <div className='flex gap-4'>
                <button className='bg-black text-white p-2 rounded-md' onClick={() => {
                    dispatch(increment())
                }}>Increment</button>
                <button className='bg-black text-white p-2 rounded-md' onClick={() => {
                    dispatch(decrement())
                }}>Decrement</button>
            </div>
        </div>
    )
}