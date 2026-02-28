import '../style.css';
import Form from "./Form";
import Result from "./Result";
import React, {useState} from "react";
import {generatePasswords, generateReadablePasswords} from "../lib/functions";


/**
 * Корневой компонент приложения
 * @returns {JSX.Element}
 * @constructor
 */
function App() {

    const [passwords, setPasswords] = useState(generateReadablePasswords());

    return (
        <section>
            <Form setPasswords={setPasswords}/>
            <Result passwords={passwords}
                    setPasswords={setPasswords}/>
        </section>
    )
}

export default App;
