const email = document.querySelector('.email');
const btn = document.querySelector('.btn');
const error = document.querySelector('.error');
const msg = document.querySelector('.msg');

const validRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(btn.first);
    if(!email.value.match(validRegex) || email.value == "") {
        email.classList.add('invalid');
        error.style.display = 'block';
        msg.classList.add('invalid');
        msg.innerText = 'Please provide a valid email';
    } else {
        email.classList.remove('invalid');
        error.style.display = 'none';
        msg.classList.remove('invalid')
        msg.innerText = '';
        clearField();
    }
})

function clearField() {
    email.value = "";
}
