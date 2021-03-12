import './style.css';
import Form from "./components/Form";
import Result from "./components/Result";
import React,{useState} from "react";


function App() {

    const [passwords,setPasswords] = useState([]);

    return (
        <div className="App">
            <h1>Password Generator</h1>
            <section>
                <Form setPasswords={setPasswords}/>
                <Result passwords={passwords}/>
            </section>
        </div>
    )
}

export default App;
