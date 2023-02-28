import React from 'react'

/**
 * компонент инпут/чекбокс
 * выбор типов символов для пароля
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Checkbox(props) {
    const {checkbox} = props;
    return (
        <p>
            <label>
                <input type="checkbox"
                       name={checkbox.name}
                       defaultChecked={checkbox.checked}
                       disabled={checkbox.disabled ?? false}/>
                <span>{checkbox.info}</span>
            </label>
        </p>
    )
}

export default Checkbox