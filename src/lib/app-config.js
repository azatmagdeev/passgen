export const passwords_count = 8;

export const init_radios = [
    {
        value: 8,
        info: '8 знаков',
        checked: true
    },
    {
        value: 10,
        info: '10 знаков',
        checked: false
    },
    {
        value: 15,
        info: '15 знаков',
        checked: false
    },
    {
        value: 20,
        info: '20 знаков',
        checked: false
    },
];

export const init_checkboxes = [
    {
        name: 'en',
        info: 'строчные (abc)',
        checked: true,
        string: 'abcdefghijklmnopqrstuvwxyz'
    },
    {
        name: 'EN',
        info: 'Заглавные (ABC)',
        checked: true,
        string: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    },
    {
        name: 'num',
        info: 'цифры (123)',
        checked: true,
        string: '012345678901234567890123456789'
    },
    {
        name: 'symb',
        info: 'символы (!@#)',
        checked: false,
        string: '!@#$%^&*(){}[]_-+=?:~'
    }
];


