import React from 'react'


const Checkbox = (props) => {
    return (
        <p>
            <label>
                <input type="checkbox"
                       name={props.checkbox.name}
                       defaultChecked={props.checkbox.checked}/>
                <span>{props.checkbox.info}</span>
            </label>
        </p>
    )
}

export default Checkbox