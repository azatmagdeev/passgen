var PassGen = /** @class */ (function () {
    function PassGen() {
        var _this = this;
        this.lower_cases = 'abcdefghijklmnopqrstuvwxyz';
        this.upper_cases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.numbers = '0123456789';
        this.symbols = '!@#$%^&*(){}[]_-+=?><:;~';
        this.string = '';
        this.resultEl = document.querySelector('#result');
        this.form = document.querySelector('#form');
        this.button = document.querySelector('#form button');
        this.form.addEventListener('change', function () {
            _this.changedForm();
        });
        this.form.addEventListener('submit', function (e) {
            e.preventDefault();
            _this.submittedForm();
        });
    }
    PassGen.prototype.changedForm = function () {
        this.generateString();
        !this.string
            ? this.button.classList.add('disabled')
            : this.button.classList.remove('disabled');
    };
    PassGen.prototype.submittedForm = function () {
        this.generateString();
        var passwords = [];
        for (var i = 0; i < 8; i++) {
            passwords.push(this.getPassString());
        }
        this.renderPasswords(passwords);
    };
    PassGen.prototype.generateString = function () {
        this.string = '';
        this.form['lower'].checked ? this.string += this.lower_cases : null;
        this.form['upper'].checked ? this.string += this.upper_cases : null;
        this.form['num'].checked ? this.string += this.numbers : null;
        this.form['symb'].checked ? this.string += this.symbols : null;
        return this.string;
    };
    PassGen.prototype.getPassString = function () {
        var pass_string = '';
        var length = '';
        var radios = this.form['pass_length'];
        for (var _i = 0, radios_1 = radios; _i < radios_1.length; _i++) {
            var radioElement = radios_1[_i];
            radioElement.checked ? length = radioElement.value : null;
        }
        for (var i = 0; i < Number(length); i++) {
            var position = Math.floor(Math.random() * this.string.length);
            pass_string += this.string[position];
        }
        return pass_string;
    };
    PassGen.prototype.renderPasswords = function (passwords) {
        var _this = this;
        this.resultEl.innerHTML = '';
        passwords.map(function (el) {
            var p = document.createElement('p');
            var span = document.createElement('span');
            span.textContent = el;
            var copy_icon = document.createElement('i');
            copy_icon.textContent = 'content_copy';
            copy_icon.className = 'material-icons';
            p.appendChild(span);
            p.appendChild(copy_icon);
            _this.resultEl.appendChild(p);
            copy_icon.addEventListener('click', function () {
                console.log(navigator);
                navigator.clipboard.writeText(el).then(function () {
                    document.querySelectorAll('.material-icons').forEach(function (el) {
                        el.textContent = 'content_copy';
                    });
                    copy_icon.textContent = 'check';
                });
            });
        });
    };
    return PassGen;
}());
new PassGen();
