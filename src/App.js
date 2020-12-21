import React from "react";
import { Footer } from "./Footer";
import Counter from "./Counter";
import './App.css'

function App() {
    return (
        <div className="App">
            <div>Hola mundo</div>

            <Counter titulo="Counter 15" valorInicial={15} />
            <Counter titulo="Counter 10" valorInicial={15} />

            <Footer></Footer>
        </div>
    )
}

export default App;