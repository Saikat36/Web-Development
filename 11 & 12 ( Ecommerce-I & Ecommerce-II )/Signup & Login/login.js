
let login_Arr = JSON.parse(localStorage.getItem("login")) || [];
let signup_Arr = JSON.parse(localStorage.getItem("Signup-obj-key-name")) || [];

document.querySelector("form").addEventListener("submit",log_In_Complted);

function log_In_Complted(event){

    event.preventDefault()

    let obj ={
        personEmail: document.querySelector("#Email").value,
        personPassword: document.querySelector("#Password").value
    } 




    signup_Arr.forEach(function(element){

        var flag = false;

        if(element.personEmail == obj.personEmail && element.personPassword == obj.personPassword){
            flag = true;
            localStorage.setItem("login-key-name",JSON.stringify(element));
            alert("Log-In Successfully")
        }

        else if(element.personEmail != obj.personEmail || element.personPassword != obj.personPassword){
            alert("Please Put Currect Input")
        }

    })


}