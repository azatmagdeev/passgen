import React from 'react'


export default function Result(props) {
    return (
        <div id="result">
            {
                props.passwords.map(
                    el => <Password key={el} password={el}/>
                )
            }
        </div>
    )
}

function Password(props) {

    async function copyPassword(e) {
        await navigator.clipboard.writeText(props.password)
        e.target.textContent = 'check'
    }

    return (
        <p>
            <span>
                {props.password}
            </span>
            <i className="material-icons" onClick={copyPassword}>
                content_copy
            </i>
        </p>
    )
}

