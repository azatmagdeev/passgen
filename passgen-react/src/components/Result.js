import React from 'react'


export default function Result(props) {
    const {passwords} = props;
    return (
        <div id="result">
            {
                passwords.map(
                    el => <Password key={el} password={el}/>
                )
            }
        </div>
    )
}

function Password(props) {

    const {password} = props;

    async function copyPassword(e) {
        await navigator.clipboard.writeText(password);
        e.target.textContent = 'check'
    }

    return (
        <p>
            <span>
                {password}
            </span>
            <i className="material-icons" onClick={copyPassword}>
                content_copy
            </i>
        </p>
    )
}

