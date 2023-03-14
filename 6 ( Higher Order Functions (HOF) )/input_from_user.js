
/* 
    To take input from user type in the terminal =  

                             npm install prompt-sync 

*/

const prompt = require('prompt-sync')();

var fname = prompt("Enter your first name ");
var lname = prompt("Enter your lsst name ");

console.log("Your Full name is ",fname,lname);