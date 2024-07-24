"use client";

export default function Categories() {
    const selectCategory = (categoryName: string)=>{
        console.log(categoryName);
    }

    return (
        <>
            <button onClick={()=>{selectCategory("Mobile Phones")}}>Mobile Phones</button>
            <button onClick={()=>{selectCategory("Computers")}}>Computers</button>
            <button onClick={()=>{selectCategory("Gadgets")}}>Gadgets</button>
            <button onClick={()=>{selectCategory("Cars")}}>Cars</button>
        </>
    )
}