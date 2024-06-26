import { useState } from "react";

const State = () => {
    const [greeting, setGreeting] = useState({ greet: "Hello, World" });
    console.log(greeting, setGreeting);

    function updateGreeting() {

        //correct way of updating
        // const newGreeting = { ...greeting };
        // newGreeting.greet = 'Hello, World totally';
        // setGreeting(newGreeting);

        //other correct way of updating
        setGreeting({...greeting,greet: "Hello, World totally"});


        //incorrect way of updating leads error in which return TypeError
        // greeting = { greet: "Hello, World-Wide Web" };
        // setGreeting(greeting);

        //incorect way to update the value in which it doen't update
        // greeting.greet = "Hello, World-Wide Web"; 
        // setGreeting(greeting);
    }

    return (
        <div>
            <h1>{greeting.greet}</h1>
            <button onClick={updateGreeting} className="bg-sky-500">Update greeting</button>
        </div>
    );
}

export default State;