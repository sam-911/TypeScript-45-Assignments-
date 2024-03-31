"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let yourname = '';
yourname = prompt('what is your name') || '';
let lowercase = yourname.toLowerCase();
let UpperCase = yourname.toUpperCase();
let titlecase = yourname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (yourname !== null && yourname !== '') {
    alert(`Hello ${yourname}, Here are your name in:
LowerCase: ${lowercase}
UpperCase: ${UpperCase}
TitleCase: ${titlecase}`);
}
else {
    alert('please fill your name !');
}
;
