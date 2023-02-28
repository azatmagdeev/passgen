import {generatePassword, generateString, generatePasswords} from "../lib/functions";
import {init_checkboxes} from "../lib/app-config";


describe('тест функции GenerateString()', () => {
    const all_checkboxes = init_checkboxes.map(checkbox => {
        const new_checkbox = {...checkbox}
        new_checkbox.checked = true;
        return new_checkbox
    })

    test('генерируется исходная строка при вкл всех чекбоксов', () => {
        expect(generateString(all_checkboxes)).toBe(
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012345678901234567890123456789!@#$%^&*(){}[]_-+=?:~"
        )
    })

    const num_checkboxes = init_checkboxes.map(checkbox => {
        const new_checkbox = {...checkbox}
        new_checkbox.checked = new_checkbox.name === 'num';
        return new_checkbox
    })

    test('при чекбоксе только цифры длинна строки равна 30', () => {
        expect(generateString(num_checkboxes).length).toBe(30)
    })

    test('при чекбоксе только цифры в строке только цифры', () => {
        expect(generateString(num_checkboxes)).toEqual(expect.stringMatching(/^[0-9]*$/))
    })
})


describe('тест функции generatePassword()', () => {
    const string = "abcdefghijklmnopqrstuvwxyz"
    const length = 10

    test('при не пустой исходной строке длина пароля = параметру length ', () => {
        expect(generatePassword(string, length).length).toBe(length)
    })

    test('при пустой исходной строке выбрасывает ошибку', () => {
        expect(() => generatePassword('', length)).toThrow()
    })

    test('при параметре string = null выбрасывает ошибку', () => {
        expect(() => generatePassword(null, length)).toThrow()
    })

    test('при параметре string типа boolean выбрасывает ошибку', () => {
        expect(() => generatePassword(false, length)).toThrow()
    })

    test('при параметре string = 10(число) выбрасывает ошибку', () => {
        expect(() => generatePassword(10, length)).toThrow()
    })

    test('при параметре length типа boolean выбрасывает ошибку', () => {
        expect(() => generatePassword(string, true)).toThrow()
    })

    const negative_length = -10
    test('при не пустой исходной строке и отрицательной длине выбрасывает ошибку', () => {
        expect(() => generatePassword(string, negative_length)).toThrow()
    })
})

describe('тест функции generatePasswords()', () => {
    test('по умолчанию возвращает массив из 8 объектов', () => {
        expect(generatePasswords().length).toBe(8)
    })
})



