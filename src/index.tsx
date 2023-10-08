import React from 'react'
import {createRoot} from "react-dom"

const root = createRoot(document.getElementById("root"))

const App = () => {
    const [count, setCount] = React.useState(0);

    return <div>
        <h1>Hello Bun</h1>
        <h1>Count: {count}</h1>
        <button onClick={()=> setCount(count => count+1)}>Increase</button>
    </div>
}

root.render(<App />)