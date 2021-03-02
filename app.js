const lower_cases = 'abcdefghijklmnopqrstuvwxyz'
const upper_cases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*(){}[]_-+=?><:;~'
let string = ''
const resultEl = document.querySelector('#result')
const form = document.querySelector('#form')

form.addEventListener('change',()=>{
    string = ''
    form.lower.checked ? string += lower_cases : null
    form.upper.checked ? string += upper_cases : null
    form.num.checked ? string += numbers : null
    form.symb.checked ? string += symbols : null

    !string?document.querySelector('#form button').classList.add('disabled'):document.querySelector('#form button').classList.remove('disabled')
})

//todo refactor

form.addEventListener('submit', (e) => {
    e.preventDefault()
    string = ''
    form.lower.checked ? string += lower_cases : null
    form.upper.checked ? string += upper_cases : null
    form.num.checked ? string += numbers : null
    form.symb.checked ? string += symbols : null

    const passwords = [];

    for (let i = 0; i < 7; i++) {
        passwords.push(getPassString())
    }

    renderPasswords(passwords)
})

function getPassString() {
    let pass_string = ''
    for (let i = 0; i < Number(form.pass_length.value); i++) {
        const position = Math.floor(Math.random() * string.length)
        pass_string += string[position]
    }
    return pass_string
}

function renderPasswords(passwords) {
    resultEl.innerHTML = ''
    passwords.map(el => {
        const p = document.createElement('p')
        const span = document.createElement('span')
        span.textContent = el
        const copy_icon = document.createElement('i')
        copy_icon.textContent = 'content_copy'
        copy_icon.className = 'material-icons'
        p.append(span,copy_icon)
        resultEl.append(p)
        copy_icon.addEventListener('click', async()=>{
            await navigator.clipboard.writeText(el)
            copy_icon.textContent = 'check'
        })
    })
}