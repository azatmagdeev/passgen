import React from 'react';
import Checkbox from "./Checkbox";
import Radio from "./Radio";


function Form() {
    const checkboxes = [
        {
            name: 'lower',
            info: 'lower (abc)',
            checked: true
        },
        {
            name: 'upper',
            info: 'UPPER (ABC)',
            checked: false
        },
        {
            name: 'num',
            info: 'numbers (123)',
            checked: true
        },
        {
            name: 'symb',
            info: 'symbols (!@#)',
            checked: false
        },
    ];

    const radios = [
        {
            value: 8,
            info: '8 characters',
            checked: false
        },
        {
            value: 10,
            info: '10 characters',
            checked: false
        },
        {
            value: 12,
            info: '12 characters',
            checked: true
        },
        {
            value: 15,
            info: '15 characters',
            checked: false
        },
    ]


    function changedForm() {
        console.log('form changed!')
    }

    function submitedForm(e) {
        e.preventDefault()
    }

    return (
        <form onChange={changedForm} onSubmit={submitedForm}>
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

export default Form;
