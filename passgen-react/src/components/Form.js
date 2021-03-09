import React from 'react';

function Form() {
    const checkboxes = [
        {
            name:'lower',
            info:'lower (abc)',
            checked: true
        },
        {
            name:'upper',
            info:'UPPER (ABC)',
            checked: true
        },
        // {
        //     name:'lower',
        //     info:'lower (abc)',
        //     checked: true
        // },
        // {
        //     name:'lower',
        //     info:'lower (abc)',
        //     checked: true
        // },
    ];

    return (
        <div>
            <p>
                <label>
                    <input type="checkbox" name="lower" defaultChecked/>
                    <span>lower (abc)</span>
                </label>
            </p>
            <p>
                <label>
                    <input type="checkbox" name="upper"/>
                    <span>UPPER (ABC)</span>
                </label>
            </p>
            <p>
                <label>
                    <input type="checkbox" name="num" defaultChecked/>
                    <span>numbers (123)</span>
                </label>
            </p>
            <p>
                <label>
                    <input type="checkbox" name="symb"/>
                    <span>symbols (!@#)</span>
                </label>
            </p>
        </div>
    );

}

export default Form;
