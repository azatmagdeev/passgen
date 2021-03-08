const lower_cases: string = 'abcdefghijklmnopqrstuvwxyz';
const upper_cases: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers: string = '0123456789';
const symbols: string = '!@#$%^&*(){}[]_-+=?><:;~';
let string: string = '';
const resultEl: HTMLElement = document.querySelector('#result');
const form: HTMLElement = document.querySelector('#form');

function generateString() {
    string = '';
    form['lower'].checked ? string += lower_cases : null;
    form['upper'].checked ? string += upper_cases : null;
    form['num'].checked ? string += numbers : null;
    form['symb'].checked ? string += symbols : null;
    return string
}

form.addEventListener('change', () => {
    generateString();
    !string ? document.querySelector('#form button').classList.add('disabled') : document.querySelector('#form button').classList.remove('disabled')
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    generateString();
    const passwords = [];
    for (let i = 0; i < 8; i++) {
        passwords.push(getPassString())
    }
    renderPasswords(passwords)
});

function getPassString() {
    let pass_string = '';
    for (let i = 0; i < Number(form['pass_length'].value); i++) {
        const position = Math.floor(Math.random() * string.length);
        pass_string += string[position]
    }
    return pass_string
}

function renderPasswords(passwords) {
    resultEl.innerHTML = '';
    passwords.map(el => {
        const p = document.createElement('p');
        const span = document.createElement('span');
        span.textContent = el;
        const copy_icon = document.createElement('i');
        copy_icon.textContent = 'content_copy';
        copy_icon.className = 'material-icons';
        p.append(span, copy_icon);
        resultEl.append(p);
        copy_icon.addEventListener('click', () => {
            navigator.clipboard.writeText(el).then(() => {
                document.querySelectorAll('.material-icons').forEach(el => {
                    el.textContent = 'content_copy'
                });
                copy_icon.textContent = 'check'
            });
        })
    })
}