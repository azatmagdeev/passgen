import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

import ResultItem from "./../components/ResultItem";
import {generatePasswords, generateString} from "../lib/functions";

document.execCommand = jest.fn()


const passwords = generatePasswords(generateString(), 10)
const setPasswords = jest.fn()
let container = null;

beforeAll(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
        render(
            <ResultItem password={passwords[0]}
                        passwords={passwords}
                        setPasswords={setPasswords}/>,
            container
        );
    });


})

afterAll(() => {
    // подчищаем после завершения
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

test('resultItem рендерится', () => {
    expect(container.querySelector('input').className).toBe("result__item");
    expect(container.querySelector('input').value).toBe(passwords[0].password);
})


test('на кнопке копировать иконка копировать', () => {
    const copy_button = container.querySelector('img')
    expect(copy_button.src).toEqual(expect.stringContaining("icons/copy.svg"))
})

test('после клика поле copied объекта пароля = true им еняется иконка ', () => {
    act(() => {
        let copy_button = container.querySelector('img')
        copy_button.dispatchEvent(new MouseEvent('click', {bubbles: true}))
    })
    expect(passwords[0].copied).toBe(true)
    act(() => {
        render(
            <ResultItem password={passwords[0]}
                        passwords={passwords}
                        setPasswords={setPasswords}/>,
            container
        );
    });
    let copy_button = container.querySelector('img')
    expect(copy_button.src).toEqual(expect.stringContaining('icons/done.svg'))

})


