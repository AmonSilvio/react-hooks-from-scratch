//Tehty tällä tutoriaalilla: "How do React Hooks really work? Let's build useState from scratch!"" https://www.youtube.com/watch?v=_qkX3yAmgEw

import React from "react"
import ReactDOM from "react-dom"
/* import { useState } from "react" */
import "./index.css"


let callIndex= -1
let stateValues = []

const useState =(initialValue)=> {
    callIndex++
    const currentCallIndex = Number(callIndex)

    if (stateValues[currentCallIndex] === undefined) {
        stateValues[currentCallIndex] = initialValue
    }
    const setValue = (newValue) => {
        stateValues[currentCallIndex] = newValue
        renderApp()
    }
    return [stateValues[currentCallIndex], setValue]
}


const App = () => {
    const [countA, setCountA] = useState(1)
    const [countB, setCountB] = useState(-1)

    return (
        <div>
            <div>
                <h1>Laske A: {countA}</h1>
                <button onClick={() => setCountA(countA - 1)}>Vähennä</button>
                <button onClick={() => setCountA(countA + 1)}>Lisää</button>
            </div>
            <div>
                <h1>Lakse B: {countB}</h1>
                <button onClick={() => setCountB(countB - 1)}>Vähennä</button>
                <button onClick={() => setCountB(countB + 1)}>Lisää</button>
            </div>
        </div>
    )
}

const renderApp = () => {
     callIndex = -1
    ReactDOM.render(<App />, document.getElementById("root"))
}
renderApp()






//Ensimmäinen versio

/* let stateValue = undefined

const useState = (initialValue) => {
    if (stateValue === undefined) {
        stateValue = initialValue
    }
    const setValue = (newValue) => {
        stateValue = newValue
    }
    return [stateValue, setValue]
}
 */







//Toinen versio

/* let callIndex= -1
let stateValues = []

const useState =(initialValue)=> {
    callIndex++
    const currentCallIndex = Number(callIndex)

    if (stateValues[currentCallIndex] === undefined) {
        stateValues[currentCallIndex] = initialValue
    }
    const setValue = (newValue) => {
        stateValues[currentCallIndex] = newValue
        renderApp()
    }
    return [stateValues[currentCallIndex], setValue]
} */

