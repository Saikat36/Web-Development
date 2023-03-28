// Here I start my JS

document.querySelector("form").addEventListener("submit",signup_Fully);

let signup_Arr = JSON.parse(localStorage.getItem("Signup-obj-key-name")) || [];

signup_Fully();   // call the function 

function signup_Fully(event){
    
    event.preventDefault();

    let obj ={
        personName: document.querySelector("#Name").value,
        personEmail: document.querySelector("#Email").value,
        personPassword: document.querySelector("#Password").value
    } 

    if(obj.personName == "" || obj.personEmail == "" || obj.personPassword == ""){
        alert("Please Fill All Details")
    }
    else{
        signup_Arr.push(obj)  // we can store the object in the array
        localStorage.setItem("Signup-obj-key-name",JSON.stringify(signup_Arr)) // store the array-object in local Storage
        alert("Sign Up Successfully"); // it's through a alert massage
        window.location.href = "login.html"
    }
}
