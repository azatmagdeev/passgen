import React from 'react'

export default function Radio(props) {
    const {radio,setLength} = props;
    return (
        <p>
            <label>
                <input name="pass_length" type="radio"
                       value={radio.value}
                       defaultChecked={radio.checked} />
                <span>{radio.info}</span>
            </label>
        </p>
    )
}