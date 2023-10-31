import {useState} from "react";

const Button = () =>{
    const [count, setCount] = useState(0);
    const handleClick = () =>{
        setCount(count+1);
    };
    return(
        <>
            <h1>Count is {count}</h1>
            <button onClick={handleClick}>Increase</button>
        </>
    )
}

export default Button;