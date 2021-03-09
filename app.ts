class PassGen {
    lower_cases = 'abcdefghijklmnopqrstuvwxyz';
    upper_cases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    numbers = '0123456789';
    symbols = '!@#$%^&*(){}[]_-+=?><:;~';
    string = '';
    resultEl = document.querySelector('#result');
    form = document.querySelector('#form');
    button = document.querySelector('#form button');

    constructor() {
        this.form.addEventListener('change', () => {
            this.changedForm()
        });
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            this.submittedForm()
        });
    }

    changedForm() {
        this.generateString();
        !this.string
            ? this.button.classList.add('disabled')
            : this.button.classList.remove('disabled')
    }

    submittedForm() {
        this.generateString();
        const passwords = [];
        for (let i = 0; i < 8; i++) {
            passwords.push(this.getPassString())
        }
        this.renderPasswords(passwords)
    }

    generateString() {
        this.string = '';
        this.form['lower'].checked ? this.string += this.lower_cases : null;
        this.form['upper'].checked ? this.string += this.upper_cases : null;
        this.form['num'].checked ? this.string += this.numbers : null;
        this.form['symb'].checked ? this.string += this.symbols : null;
        return this.string;
    }

    getPassString() {
        let pass_string = '';
        let length = ''
        const radios = this.form['pass_length']
        for (const radioElement of radios) {
            radioElement.checked ? length = radioElement.value : null;
        }
        for (let i = 0; i < Number(length); i++) {
            const position = Math.floor(Math.random() * this.string.length);
            pass_string += this.string[position]
        }
        return pass_string
    }

    renderPasswords(passwords) {
        this.resultEl.innerHTML = '';
        passwords.map(el => {
            const p = document.createElement('p');
            const span = document.createElement('span');
            span.textContent = el;
            const copy_icon = document.createElement('i');
            copy_icon.textContent = 'content_copy';
            copy_icon.className = 'material-icons';
            p.appendChild(span);
            p.appendChild(copy_icon);
            this.resultEl.appendChild(p);
            copy_icon.addEventListener('click', () => {
                console.log(navigator)
                navigator.clipboard.writeText(el).then(() => {
                    document.querySelectorAll('.material-icons').forEach(el => {
                        el.textContent = 'content_copy'
                    });
                    copy_icon.textContent = 'check'
                });
            })
        })
    }
}

new PassGen();