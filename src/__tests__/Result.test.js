import {act} from "react-dom/test-utils";
import {render, unmountComponentAtNode} from "react-dom";
import Result from "../components/Result";
import React from "react";
import {generatePasswords, generateString} from "../lib/functions";

const passwords = generatePasswords(generateString(), 10)
const setPasswords = jest.fn()
let container = null;

beforeAll(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
        render(
            <Result passwords={passwords}
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

test('результатов должно быть 8',()=>{
    expect(container.querySelector('#result').children.length).toBe(8)
})