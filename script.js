const form = document.querySelector('#form');
const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const pwCheck = document.querySelector('#pwcheck');
const nameError = document.querySelector('#nameError');
const formError = document.querySelector('#error');
const success = document.querySelector('.icon-success');
const error = document.querySelector('.icon-error');
const nextSibling = success.nextElementSibling;
const prevSibling = error.previousElementSibling;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validation();
});
