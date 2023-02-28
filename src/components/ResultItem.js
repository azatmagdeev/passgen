import React from "react";

/**
 * компонент - один сгенерированный пароль
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function ResultItem(props) {

    const {password, passwords, setPasswords} = props;

    /**
     * обработка нажатия иконки скопировать у пароля
     * @param e
     */
    function copyPassword(e) {
        const inputEl = e.target.parentElement.querySelector('input')
        inputEl.select()
        document.execCommand('copy')
        setPasswords(passwords.map(p => {
            p.copied = (p.password === password.password)
            return p
        }))
    }

    return (
        <p>
            <label>
                <input value={password.password}
                       style={{width: `${password.password.length}ch`}}
                       className="result__item"
                       readOnly/>
            </label>
            <img src={password.copied ? "icons/done.svg" : "icons/copy.svg"}
                 alt={password.copied ? "готово!" : "копировать!"}
                 title={password.copied ? "готово!" : "копировать!"}
                 onClick={copyPassword} />
        </p>
    )
}

export default ResultItem