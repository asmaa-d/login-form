
// /*_________________________________________________________________*/

// /*signUp form */

var nameInpSUP =document.getElementById("nameInpSUP");
var emailInpSUP = document.getElementById("emailInpSUP");
var passwordInpSUP = document.getElementById("passwordInpSUP");

var signUpBtn = document.getElementById("signUpBtn");

var nameAlertSUP = document.getElementById("nameAlert");
var emailAlertSUp = document.getElementById("emailAlertSUp");
var passAlertSUP = document.getElementById("passAlertSUP");

var sucAlertSUP = document.getElementById("sucAlertSUP");

var mailExitAlert = document.getElementById("mailExitAlert")

var fieldesRequiered = document.getElementById("fieldesRequiered")

var signUpMails ;

/* validate name */

var regexName = /^[A-Z][a-z]{2,}[ ]?[A-Z]?[a-z]*$/

function validateNmeSignUp(){
    if(regexName.test(nameInpSUP.value) == true){
        return true;
    }else{
        return false;
    }
}


if(nameInpSUP != null){
    nameInpSUP.addEventListener("blur" , function(){
        if(validateNmeSignUp() == true){
            nameInpSUP.classList.replace("is-invalid" , "is-valid");
            nameAlert.classList.replace("d-block" , "d-none");
        }else{
            nameInpSUP.classList.add("is-invalid");
            nameAlert.classList.replace("d-none" , "d-block");
        }  
    })
}
   

/* validate email */

var regexEmail = /^[a-zA-Z0-9._%+-]+([0-9]+|[0-9]?)\@(gmail|google|yahoo)\.(com)/; 

function validateEmailSignUp(){

   if( regexEmail.test(emailInpSUP.value) == true){    
      return true;
    }else{
       return false;
    }
}

if(emailInpSUP != null){
    emailInpSUP.addEventListener("blur" , function(){
        if(validateEmailSignUp() == true){
            emailInpSUP.classList.replace("is-invalid" , "is-valid");
            emailAlertSUp.classList.replace("d-block" , "d-none");
        }else{
            emailInpSUP.classList.add("is-invalid")
            emailAlertSUp.classList.replace("d-none" , "d-block");
        }
       
    })
}


/* validate password */

var regexPassword = /^[0-9]{5,15}[A-Z]+[a-z]{3,8}[#?!@$%^&*\-_\\\/]$/;

function validatePasswordSignUp(){
    if(regexPassword.test(passwordInpSUP.value) == true){
        return true;
    }else{
        return false
    }
}

if(passwordInpSUP != null){
    passwordInpSUP.addEventListener("blur" , function(){
        if(validatePasswordSignUp() == true){
            passwordInpSUP.classList.replace("is-invalid" , "is-valid");
            passAlertSUP.classList.replace("d-block" , "d-none");
        }else{
            passwordInpSUP.classList.add("is-invalid");
            passAlertSUP.classList.replace("d-none" , "d-block");
    
        }
    })
}

/* cheack local storage */

if(localStorage.getItem("sign_UP_Mails") == null){
    signUpMails = []
}else{
    signUpMails = JSON.parse(localStorage.getItem("sign_UP_Mails"));   
}

/* cheack validation */

function validateSignUp(){

    if(nameInpSUP.value == "" || emailInpSUP.value == "" || passwordInp == ""){
        fieldesRequiered.classList.replace("d-none" , "d-block")
    }

    // if(localStorage.getItem("sign_UP_Mails").includes(`${emailInpSUP.value}`)){
    //     mailExitAlert.classList.replace("d-none" , "d-block")
    // }

    else if(validateNmeSignUp() == true&&
            validateEmailSignUp() == true&& 
            validatePasswordSignUp() == true){

            var signUps = {
                userName: nameInpSUP.value,
                userEmail: emailInpSUP.value,
                userPass : passwordInpSUP.value
            }

            signUpMails.push(signUps);

            localStorage.setItem("sign_UP_Mails" , JSON.stringify(signUpMails))
            sucAlertSUP.classList.replace("d-none" , "d-block");
            mailExitAlert.classList.replace("d-block" , "d-none");
            fieldesRequiered.classList.replace("d-block" , "d-none")
    }

    
}

if(signUpBtn != null){
    signUpBtn.addEventListener("click"  , validateSignUp)
}

// /*_________________________________________________________________*/



/* login form */

var emailInp = document.getElementById("emailInp");
var passwordInp = document.getElementById("passwordInp");
var loginBtn = document.getElementById("loginBtn");

var emailIncorrect = document.getElementById("emailIncorrect");
var emailOrPassEmpty = document.getElementById("emailOrPassEmpty")
var passAlert = document.getElementById("passAlert");

var msg = document.getElementById("msg");


//var isExist = false;

var userNameLodined = localStorage.getItem("userNameLodined") ;


function local(){

    for(var i = 0 ; i < signUpMails.length ; i++){

        if(signUpMails[i].userEmail == emailInp.value &&
           signUpMails[i].userPass == passwordInp.value){
            localStorage.setItem("userNameLodined" , signUpMails[i].userName)
            //console.log(userNameLodined)
            return  true;
            //return isExist = true;   
        
        }
    }    
}


function loginForm(){

    if(emailInp.value == "" || passwordInp.value == ""){
        emailOrPassEmpty.classList.replace("d-none" , "d-block")
    }

     //local()

    else if( local() == true ){
        
        loginBtn.setAttribute("href" , "home.html")   
    }   
 
    else{
        emailIncorrect.classList.replace("d-none" , "d-block")
    }
    
}


(function userMsg(){
    
    if(msg != null){
        msg.innerHTML = "welcome" +" " + userNameLodined;
        console.log(userNameLodined)
    }
    
})();


if(loginBtn != null){
    loginBtn.addEventListener("click" , loginForm );
}





