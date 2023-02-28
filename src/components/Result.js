import React from 'react'
import ResultItem from './ResultItem'

/**
 * компонент - блок со сгенерированными паролями
 * @param props
 * @constructor
 */
export default function Result(props) {
    const {passwords, setPasswords} = props;
    return (
        <div id="result">
            {
                passwords.map(password =>
                    <ResultItem key={password.password}
                                password={password}
                                passwords={passwords}
                                setPasswords={setPasswords}/>
                )
            }
        </div>
    )
}



