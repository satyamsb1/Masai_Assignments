import {useState} from "react";

const Input = () =>{

    const [input, setInput] = useState("");
    const update = (e) =>{
        setInput(e.target.value);
    }
    const clear = () =>{
        setInput("");
    }
    return(
        <>
            <h2>{input}</h2>
            <input type="text" value={input} onChange={update}/>
            <button onClick={clear}>Clear</button>
        </>
    )
}

export default Input; 