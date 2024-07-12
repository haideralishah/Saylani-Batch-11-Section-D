'use client';

type ButtonTypes = {
    label: string,
    clickHandler: () => void;
}

export default function MyButton({label, clickHandler}: ButtonTypes){
    const printMsg = ()=>{
        console.log('This is event handling');
    }
    
    return <button onClick={clickHandler} >{label}</button>
    
    // return <button onClick={printMsg} >{label}</button>
}

// const Button = ({label})=><button>{label}</button>;

// export default Button;