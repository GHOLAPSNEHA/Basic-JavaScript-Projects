const submitBtn=document.getElementById('submitBtn');
const nameError=document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
const confirmpassError=document.getElementById('confirmpassError');

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    if(validateName() && validateEmail() && validatePassword() && confirmPassword()){
        alert("form submitted successfully");
    }
});

function validateName(){
    let name=document.getElementById('name').value;
    if(name.length==0){
        nameError.innerHTML="Name is required";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(! name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write full name";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    nameError.innerHTML="";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;

}


function validateEmail(){
    let email=document.getElementById('email').value;
    if(email.length==0){
        emailError.innerHTML="Email is required";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(! email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML="Write valid name";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    emailError.innerHTML="";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;

}

function validatePassword(){
    let password=document.getElementById('password').value;
    if(password.length==0){
        passError.innerHTML="password is required";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(! password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passError.innerHTML = "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    passError.innerHTML="";
    passError.previousElementSibling.classList.add('fa-check');
    return true;

}

//make  confirmPassword function to validate it 

function confirmPassword(){
    let conPassword=document.getElementById('confirmPass').value;
    let password=document.getElementById('password').value;

    if(conPassword.length ==0){
        confirmpassError.innerHTML="Please re-enter the password ";
        confirmpassError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(conPassword !== password){
        confirmpassError.innerHTML="Please enter the correct password ";
        confirmpassError.previousElementSibling.classList.add('fa-xmark');
        return false;

    }
    

        confirmpassError.innerHTML="";
        confirmpassError.previousElementSibling.classList.add('fa-check');
        return true;

    

    // if(conPassword === password){
    //     passError.innerHTML="";
    //     passError.previousElementSibling.classList.add('fa-check');
    //     return true;

    // }

    
    

}