var form = document.forms[0];
var phone_number = document.querySelector("[name='phoneNumber']");
var email = document.querySelector("[name='email']");
var btn = form.querySelector("button");

var phone_error = phone_number.parentElement.querySelector('p');
var email_error = email.parentElement.querySelector('p');

form.addEventListener('submit', function(event)
{
    event.preventDefault();

    let is_valid = true;
    let vaild_email=/^[A-Za-z0-9_]+@(gmail|yahoo)\.com$/;

    phone_error.style.display='none';
    email_error.style.display='none';

    if(phone_number.value.length < 11)
    {    
        phone_error.style.display='block';
        phone_error.style.color = 'red';
        is_valid = false;
    }
    if(!vaild_email.test(email.value))
    {   
        email_error.style.display='block';
        email_error.style.color = 'red';
        is_valid = false;

    }
    if(is_valid)
    {
        form.submit();
    }
   
    


});
    