(this["webpackJsonppassgen-react"]=this["webpackJsonppassgen-react"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(5),a=n.n(r),o=n(2),i=(n(11),n(0));var u=function(e){var t=e.checkbox;return Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{type:"checkbox",name:t.name,defaultChecked:t.checked}),Object(i.jsx)("span",{children:t.info})]})})};function d(e){var t=e.radio;return Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{name:"pass_length",type:"radio",value:t.value,defaultChecked:t.checked}),Object(i.jsx)("span",{children:t.info})]})})}var l=[{value:10,info:"10 characters",checked:!1},{value:15,info:"15 characters",checked:!1},{value:20,info:"20 characters",checked:!0},{value:30,info:"30 characters",checked:!1}],j=[{name:"lower",info:"lower (abc)",checked:!0,string:"abcdefghijklmnopqrstuvwxyz"},{name:"upper",info:"UPPER (ABC)",checked:!1,string:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"},{name:"num",info:"numbers (123)",checked:!0,string:"0123456789"},{name:"symb",info:"symbols (!@#)",checked:!1,string:"!@#$%^&*(){}[]_-+=?:~"}];function h(e){var t=e.setPasswords,n=e.setInputLength,s=Object(c.useState)(l.find((function(e){return e.checked})).value),r=Object(o.a)(s,2),a=r[0],h=r[1],b=Object(c.useState)(j),f=Object(o.a)(b,2),m=f[0],O=f[1];function v(){return m.map((function(e){return e.checked?e.string:""})).join("")}return Object(i.jsxs)("form",{id:"form",onChange:function(){var e=document.querySelector("#form");h(Number(e.pass_length.value)),O(m.map((function(t){return t.checked=e[t.name].checked,t}))),v()?e.querySelector("button").classList.remove("disabled"):e.querySelector("button").classList.add("disabled")},onSubmit:function(e){e.preventDefault();var c=v(),s=Array(8).fill(null).map((function(){return{password:p(c,a),clicked:!1}}));t(s),n(a)},children:[Object(i.jsxs)("div",{className:"form-body",children:[Object(i.jsx)("div",{children:m.map((function(e){return Object(i.jsx)(u,{checkbox:e},e.name)}))}),Object(i.jsx)("div",{children:l.map((function(e){return Object(i.jsx)(d,{radio:e},e.value)}))})]}),Object(i.jsx)("div",{className:"form-footer",children:Object(i.jsx)("button",{className:"btn",children:"Generate!"})})]})}function p(e,t){for(var n="",c=0;c<t;c++){n+=e[Math.floor(Math.random()*e.length)]}return n}var b=n(4),f=n.n(b),m=n(6);function O(e){var t=e.passwords,n=e.setPasswords,c=e.inputLength;return Object(i.jsx)("div",{id:"result",children:t.map((function(e){return Object(i.jsx)(v,{password:e,passwords:t,setPasswords:n,inputLength:c},e.password)}))})}function v(e){var t=e.password,n=e.passwords,c=e.setPasswords,s=e.inputLength;function r(){return(r=Object(m.a)(f.a.mark((function e(s){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.target.parentElement.querySelector("input").select(),document.execCommand("copy"),c(n.map((function(e){return e.clicked=e.password===t.password,e})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.jsxs)("p",{children:[Object(i.jsx)("input",{value:t.password,style:{width:"".concat(s,"ch")},className:"result__item",readOnly:!0}),Object(i.jsx)("i",{className:"material-icons",onClick:function(e){return r.apply(this,arguments)},children:t.clicked?"check":"content_copy"})]})}var x=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(),a=Object(o.a)(r,2),u=a[0],d=a[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"Password Generator"}),Object(i.jsxs)("section",{children:[Object(i.jsx)(h,{setPasswords:s,setInputLength:d}),Object(i.jsx)(O,{passwords:n,setPasswords:s,inputLength:u})]})]})};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e291ed8f.chunk.js.map