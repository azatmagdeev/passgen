import React from 'react'

export default function Radio(props) {
    return (
        <p>
            <label>
                <input name="pass_length" type="radio"
                       value={props.radio.value}
                       defaultChecked={props.radio.checked}/>
                <span>{props.radio.info}</span>
            </label>
        </p>
    )
}