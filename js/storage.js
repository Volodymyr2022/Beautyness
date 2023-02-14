'use strict';

let form = document.querySelector('form');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let tel = document.querySelector('#tel');
let text = document.querySelector('#text');
let data = document.querySelector('#davaToday');

form.addEventListener('submit', () => {
    localStorage.name = name.value;
    localStorage.email = email.value;
    localStorage.tel = tel.value;
    localStorage.text = text.value;
    localStorage.data = data.value;
    // if (name.value == '' || email.value == '' || tel.value == '') {
    //     document.write('Enter all information')
    // }

})

// document.querySelector('form').addEventListener('click', function(e) {
//     // отобразим модальное окно
//     this.hide();
//   });