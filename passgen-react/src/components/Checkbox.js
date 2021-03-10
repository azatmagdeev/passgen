import React from 'react'


function Checkbox(props) {
    const {checkbox} = props;
    return (
        <p>
            <label>
                <input type="checkbox"
                       name={checkbox.name}
                       defaultChecked={checkbox.checked}/>
                <span>{checkbox.info}</span>
            </label>
        </p>
    )
}

export default Checkbox