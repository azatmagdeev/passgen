import React, {useState} from 'react'
import Checkbox from "./Checkbox"
import Radio from "./Radio"
import {init_checkboxes, init_radios} from "../lib/app-config"
import {generatePasswords, generateString} from "../lib/functions"

/**
 * компонент формы с обработчиками изменения формы и нажатия кнопки
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Form(props) {
    const {setPasswords} = props
    const [radios] = useState(init_radios)
    const [checkboxes] = useState(init_checkboxes)

    /**
     * Обработка изменения полей формы
     */
    function handleFormChange() {
        const form = document.querySelector('#form')
        checkboxes.forEach(checkbox => {
            checkbox.checked = form[checkbox.name].checked
        })
        const count = checkboxes.filter(checkbox => checkbox.checked === true).length
        if (count === 1) {
            const checkbox = checkboxes.find(ch => ch.checked === true)
            form[checkbox.name].disabled = true
        } else {
            form.querySelector('[disabled]')?.removeAttribute('disabled')
        }

        radios.forEach(radio => {
            radio.checked = form.querySelector(`[value="${radio.value}"]`).checked
        })

        form.querySelector('button').click()
    }

    /**
     * обработка нажатия кнопки
     * @param e
     */
    function handleFormSubmit(e) {
        e.preventDefault();
        const string = generateString(checkboxes)
        const length = radios.find(radio => radio.checked).value
        setPasswords(generatePasswords(string, length))
    }

    return (
        <form id="form"
              onChange={handleFormChange}
              onSubmit={handleFormSubmit}>
            <div className="form-body">
                <div>
                    {checkboxes.map(o => <Checkbox key={o.name} checkbox={o}/>)}
                </div>
                <div>
                    {radios.map(o => <Radio key={o.value} radio={o}/>)}
                </div>
            </div>
            <div className="form-footer">
                <button className="btn"><b>Сгенерировать!</b></button>
            </div>
        </form>
    );
}



