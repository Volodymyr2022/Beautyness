let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+3 (999) 999-99-99');
im.mask(selector);

let addHidden = document.querySelector('.register');
let forms = document.getElementById('forms');

let validateForms = function (selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function (form) {
             form.reset();
        
            alert('Thank you! Your registration has passed successfully! ');
            location.reload();
            // forms.reset();
        },
       
    });
  
}


validateForms('.form', { email: { required: true, email: true }, tel: { required: true }, name: { required: true, minLength: 2 } }, '.thanks-popup', 'send goal')