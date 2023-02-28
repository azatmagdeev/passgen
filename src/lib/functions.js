import {init_checkboxes, passwords_count, init_radios} from "./app-config";

/**
 * генерация рандомного пароля
 * @param string исходная строка возможных символов
 * @param length длина пароля
 * @returns {string}
 */
export function generatePassword(string, length) {

    checkParamsGeneratePassword(string, length)

    let password = '';
    for (let i = 0; i < length; i++) {
        const position = Math.floor(Math.random() * string.length);
        password += string[position]
    }
    return password
}

/**
 * Проверка параметров для функции generatePassword()
 * @param string
 * @param length
 */
function checkParamsGeneratePassword(string, length) {
    if (typeof string !== 'string')
        throw new Error('не верный тип параметра string, typeof string = ' + typeof string)
    if (string === '')
        throw new Error('параметр string не должен быть пустым')
    if (typeof length !== 'number')
        throw new Error('не верный тип параметра length, typeof string = ' + typeof length)
    if (length < 0)
        throw new Error('параметр length ожидается >= 0, фактически = ' + length)
}

/**
 * генерация исходной строки исходя из выбранных чекбоксов
 * @param checkboxes
 * @returns string
 */
export function generateString(checkboxes = init_checkboxes) {
    return checkboxes.map(
        checkbox => checkbox.checked ? checkbox.string : ''
    ).join('');
}

/**
 * Генерирует список паролей c флагом - скопирован ли
 * @param string
 * @param length
 * @returns {{password: string, copied: boolean}[]}
 */
export function generatePasswords(
    string = generateString(),
    length = init_radios.find(r => r.checked === true).value
) {
    return Array(passwords_count).fill(null).map(
        () => {
            return {
                password: generatePassword(string, length),
                copied: false
            }
        }
    );
}