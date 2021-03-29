import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const App = () => {
    return (
        <div>
            <div>
                <h1>Hook A: 0</h1>
                <button>Subtract</button>
                <button>Add</button>
            </div>
            <div>
                <h1>Hook B: 0</h1>
                <button>Subtract</button>
                <button>Add</button>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
