import {init_checkboxes, passwords_count, init_radios} from "./app-config";

const vowels = 'aeiou';
const consonants = 'bcdfghklmnprstvxz';
const specialChars = '+-_=.:@#$%!';

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

/**
 * Генерирует читаемый пароль в формате: Xxxxxx#12 или Xxxxxx12#
 * - 6 букв с чередованием гласных/согласных
 * - первая буква заглавная
 * - один спецсимвол: до или после 2 цифр
 * @returns {string}
 */
export function generateReadablePassword() {
    const startWithConsonant = Math.random() < 0.5;
    let word = '';

    for (let i = 0; i < 6; i++) {
        const useConsonant = startWithConsonant ? i % 2 === 0 : i % 2 !== 0;
        const alphabet = useConsonant ? consonants : vowels;
        const position = Math.floor(Math.random() * alphabet.length);
        word += alphabet[position];
    }

    word = word[0].toUpperCase() + word.slice(1);

    const symbol = specialChars[Math.floor(Math.random() * specialChars.length)];
    const number = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    const symbolBefore = Math.random() < 0.5;

    return symbolBefore ? `${word}${symbol}${number}` : `${word}${number}${symbol}`;
}

/**
 * Генерирует список читаемых паролей c флагом copied
 * @returns {{password: string, copied: boolean}[]}
 */
export function generateReadablePasswords() {
    return Array(passwords_count).fill(null).map(() => ({
        password: generateReadablePassword(),
        copied: false
    }));
}
