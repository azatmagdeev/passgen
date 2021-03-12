import React, {useState} from 'react';
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import {init_checkboxes, passwords_count, radios} from "../app-config";


export default function Form(props) {
    const {setPasswords} = props;
    const [length, setLength] = useState(12);
    const [checkboxes, setCheckboxes] = useState(init_checkboxes);

    function handleFormChange() {
        const form = document.querySelector('#form');
        setLength(Number(form['pass_length'].value));
        setCheckboxes(
            checkboxes.map(checkbox => {
                checkbox.checked = form[checkbox.name].checked;
                return checkbox
            })
        );
        !generateString()
            ?form.querySelector('button').classList.add('disabled')
            :form.querySelector('button').classList.remove('disabled')
    }

    function generateString(){
        return checkboxes.map(
            checkbox => checkbox.checked ? checkbox.string : ''
        ).join('');
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const string = generateString();
        const passwords = Array(passwords_count).fill('').map(
            () => generatePassword(string, length)
        );
        setPasswords(passwords)
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
