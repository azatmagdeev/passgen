var lower_cases = 'abcdefghijklmnopqrstuvwxyz';
var upper_cases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '!@#$%^&*(){}[]_-+=?><:;~';
var string = '';
var resultEl = document.querySelector('#result');
var form = document.querySelector('#form');
function generateString() {
    string = '';
    form['lower'].checked ? string += lower_cases : null;
    form['upper'].checked ? string += upper_cases : null;
    form['num'].checked ? string += numbers : null;
    form['symb'].checked ? string += symbols : null;
    return string;
}
form.addEventListener('change', function () {
    generateString();
    !string ? document.querySelector('#form button').classList.add('disabled') : document.querySelector('#form button').classList.remove('disabled');
});
form.addEventListener('submit', function (e) {
    e.preventDefault();
    generateString();
    var passwords = [];
    for (var i = 0; i < 8; i++) {
        passwords.push(getPassString());
    }
    renderPasswords(passwords);
});
function getPassString() {
    var pass_string = '';
    for (var i = 0; i < Number(form['pass_length'].value); i++) {
        var position = Math.floor(Math.random() * string.length);
        pass_string += string[position];
    }
    return pass_string;
}
function renderPasswords(passwords) {
    resultEl.innerHTML = '';
    passwords.map(function (el) {
        var p = document.createElement('p');
        var span = document.createElement('span');
        span.textContent = el;
        var copy_icon = document.createElement('i');
        copy_icon.textContent = 'content_copy';
        copy_icon.className = 'material-icons';
        p.append(span, copy_icon);
        resultEl.append(p);
        copy_icon.addEventListener('click', function () {
            navigator.clipboard.writeText(el).then(function () {
                document.querySelectorAll('.material-icons').forEach(function (el) {
                    el.textContent = 'content_copy';
                });
                copy_icon.textContent = 'check';
            });
        });
    });
}
