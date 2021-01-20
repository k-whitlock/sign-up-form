const form = document.querySelector('#form');
const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const pwCheck = document.querySelector('#pwCheck');
const nameError = document.querySelector('#nameError');
const pwError = document.querySelector('#pwError');
const pwCheckError  = document.querySelector('#pwCheckError');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    validation();
    
});



 function validation() {
    //name validation
   if (fullName.value.length < 2) {   
        //remove default border
        fullName.classList.remove('border-input');
        //add red border
        fullName.classList.add('border-error');
        //show error message
        nameError.textContent = 'Name must be at least 2 characters long';
    
    } else {
        //remove red border
        fullName.classList.remove('border-error');   
        //add default border
        fullName.classList.add('border-input');  
        //show empty message
        nameError.textContent = '';
        
    } 
    //email validation
    if (email.value.indexOf("@") == -1 || email.value.length < 6) {       
        email.classList.remove('border-input');
        email.classList.add('border-error');
        emailError.textContent = 'Please enter a valid email';

    } else {
        email.classList.remove('border-error');   
        email.classList.add('border-input');  
        emailError.textContent = '';

    }
    //password validation
    if (password.value.length < 8) {       
        password.classList.remove('border-input');
        password.classList.add('border-error');
        pwError.textContent = 'Password must be at least 8 characters long';

    
    } else if (password.value.length >= 20) {       
        password.classList.remove('border-input');
        password.classList.add('border-error');
        pwError.textContent = 'Password must be less than 20 characters long';
    
    } else {
        password.classList.remove('border-error');   
        password.classList.add('border-input');  
        pwError.textContent = '';
    } 
    //password confirmation validation
    if (pwCheck.value != password.value) {       
        pwCheck.classList.remove('border-input');
        pwCheck.classList.add('border-error');
        pwCheckError.textContent = 'Password must match';

    } else {
        pwCheck.classList.remove('border-error');   
        pwCheck.classList.add('border-input');  
        pwCheckError.textContent = '';
        
        }    
 }





