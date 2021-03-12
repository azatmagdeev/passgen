import React, {useState} from 'react';
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import {init_checkboxes, passwords_count, radios} from "../app-config";


export default function Form() {

    const [length, setLength] = useState(12)
    const [checkboxes, setCheckboxes] = useState(init_checkboxes);

    function handleFormChange(event) {
        const form = document.querySelector('#form');

        setLength(Number(form['pass_length'].value));

        setCheckboxes(
            checkboxes.map(
                checkbox => {
                    checkbox.checked = form[checkbox.name].checked
                    return checkbox
                }
            )
        )
    }

    function handleFormSubmit(e) {
        e.preventDefault()

        const string = checkboxes.map(
            checkbox => checkbox.checked ? checkbox.string : ''
        ).join('')

        const passwords = Array(passwords_count).fill('').map(
            () => generatePassword(string, length)
        )

        console.log(passwords)
    }

    return (
        <form onChange={handleFormChange} onSubmit={handleFormSubmit} id="form">
            <div className="form-body">
                <div>
                    {checkboxes.map(o => <Checkbox key={o.name} checkbox={o}/>)}
                </div>
                <div>
                    {radios.map(o => <Radio key={o.value} radio={o}/>)}
                </div>
            </div>
            <div className="form-footer">
                <button className="btn">Generate!</button>
            </div>
        </form>
    );

}

function generatePassword(string, length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const position = Math.floor(Math.random() * string.length);
        password += string[position]
    }
    return password
}