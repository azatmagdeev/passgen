import {act} from "react-dom/test-utils";
import {render, unmountComponentAtNode} from "react-dom";
import React from "react";
import Radio from "../components/Radio";
import {init_radios} from "../lib/app-config";

let container = document.createElement("div");
const radio = init_radios[0]

beforeAll(() => {

    document.body.appendChild(container);

    act(() => {
        render(
            <Radio key={radio.value} radio={radio}/>,
            container
        );
    });
})


afterAll(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

test('радио-кнопка должна быть включена', () => {
    expect(container.querySelector('input').checked).toBe(true)
})