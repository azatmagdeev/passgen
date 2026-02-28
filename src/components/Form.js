import React, {useCallback, useEffect, useState} from 'react'
import Checkbox from "./Checkbox"
import Radio from "./Radio"
import {init_checkboxes, init_radios} from "../lib/app-config"
import {generatePasswords, generateReadablePasswords, generateString} from "../lib/functions"

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
    const handleFormChange = useCallback(() => {
        const form = document.querySelector('#form')
        const readableMode = form.readable?.checked

        checkboxes.forEach(checkbox => {
            checkbox.checked = form[checkbox.name].checked
            form[checkbox.name].disabled = readableMode
        })

        radios.forEach(radio => {
            const radioInput = form.querySelector(`[value="${radio.value}"]`)
            radio.checked = radioInput.checked
            radioInput.disabled = readableMode
        })

        if (!readableMode) {
            const count = checkboxes.filter(checkbox => checkbox.checked === true).length
            checkboxes.forEach(checkbox => {
                form[checkbox.name].disabled = false
            })
            if (count === 1) {
                const checkbox = checkboxes.find(ch => ch.checked === true)
                form[checkbox.name].disabled = true
            }
        }

        form.querySelector('button').click()
    }, [checkboxes, radios])

    useEffect(() => {
        handleFormChange()
    }, [handleFormChange])

    /**
     * обработка нажатия кнопки
     * @param e
     */
    function handleFormSubmit(e) {
        e.preventDefault();
        const form = document.querySelector('#form')
        const readableMode = form.readable?.checked

        if (readableMode) {
            setPasswords(generateReadablePasswords())
            return
        }

        const string = generateString(checkboxes)
        const length = radios.find(radio => radio.checked).value
        setPasswords(generatePasswords(string, length))
    }

    return (
        <form id="form"
              onChange={handleFormChange}
              onSubmit={handleFormSubmit}>
            <div className="form-readable">
                <p>
                    <label>
                        <input type="checkbox" name="readable" defaultChecked={true}/>
                        <span>readable format</span>
                    </label>
                </p>
            </div>
            <div className="form-body">
                <div>
                    {checkboxes.map(o => <Checkbox key={o.name} checkbox={o}/>)}
                </div>
                <div>
                    {radios.map(o => <Radio key={o.value} radio={o}/>)}
                </div>
            </div>
            <div className="form-footer">
                <button className="btn"><b>Generate!</b></button>
            </div>
        </form>
    );
}



