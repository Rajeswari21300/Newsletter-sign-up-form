


var email=document.querySelector("input");
var button=document.querySelector("button");
var error_text=document.querySelector("#error");
var isValid=false;
var update_thanks=document.querySelector('.update_submit')

var data=email.value;

//  var mail_format="/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+([A-Za-z{2,4}])$/";
email.addEventListener('input', (e)=>{
    if (+email.value==""){
        addError();
        isValid=false;
    }
    else{
        removeError();
    }
    
});


// to add error css class to element
function addError(){
    email.classList.add("error-input"); 
    email.setAttribute('id',"error-border");   
    error_text.textContent="Valid email required";
}

function removeError(){
    email.classList.remove("error-input"); 
    email.removeAttribute('id');   
    error_text.textContent="";
}

// validation when clicking button

button.addEventListener('click',validate);

function isValidEntry()
{
    const reg=new RegExp("[a-zA-Z0-9]+@[a-z]+.[a-z]{2,3}");
    return reg.test(data);
}

function validate(){
    const valid=isValidEntry(data);
    if(!valid){
        return addError();
    }
    if(valid){
        update_thanks.textContent=data;
    }
}