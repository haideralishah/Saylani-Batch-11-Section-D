'use client';


import MyButton from "./button";

type HelloWorldTypes = {
    greet: string,
    message: string,
    label: string
    btnHandler: () => void;
}

export default function HelloWorld({ 
    greet, 
    message, 
    label, 
    btnHandler
 }: HelloWorldTypes) {
    
    return (
        <>
            <h1>{greet}</h1>
            <p>{message}</p>
            <MyButton 
                label={label} 
                clickHandler={btnHandler}
            />
        </>

    )
}