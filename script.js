const form = document.querySelector('#form');
const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const pwCheck = document.querySelector('#pwcheck');
const nameError = document.querySelector('#nameError');
const formError = document.querySelector('#error');
const success = document.querySelector('.icon-success');
const error = document.querySelector('.icon-error');
// const nextSibling = success.nextElementSibling;
// const prevSibling = error.previousElementSibling;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validation();
});



function validation() {
    //get values from the inputs 
   if (fullName.value <= 2 ) {     
        //show error icon
        error.classList.remove('d-none');
        //hide success icon
        success.classList.add('d-none');
        //show error message
        nameError.textContent = 'Name must be at least 2 characters long';
        
    } else {
        //show success icon
        success.classList.remove('d-none');
        //hide error icon
        error.classList.add('d-none');
        nameError.textContent = '';
    } 
}
