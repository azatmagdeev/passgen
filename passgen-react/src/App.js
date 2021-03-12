import './style.css';
import Form from "./components/Form";
import Result from "./components/Result";
import React,{useState} from "react";
import Test from './components/Test'


function App() {

    const [passwords] = useState([
        '111', '222', '333'
    ]);

    return (
        <div className="App">
            <h1>Password Generator</h1>
            <section>
                <Form/>
                <Result passwords={passwords}/>
            </section>
        </div>
    )
}

export default App;
