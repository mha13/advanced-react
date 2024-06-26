import { useState, useRef, useEffect } from "react";

const Effect = (props) => {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(Number(props.number));

    useEffect(() => {
        count.current++;
    }, []); // Empty dependency array

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <h1>Render Count: {count.current}</h1>
        </>
    );
}

export default Effect;

