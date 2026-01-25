import { useState } from "react";

function counter() {
    // Declare a state variable 'count' and a function 'setCount' to update it.
  // Initialize the count to 0.
    const [count, setCount] = useState(0);
    // Function to handle incrementing the count
    return (
        <div>
            <h1>Counter App</h1>
        </div>
    )
}