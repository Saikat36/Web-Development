


/*              Call by Value            */


let str1 = "raju";

let str2 = str1;

console.log(str2);


/* -------------------------------------------------------- */



/*              Call by Reference            */


var arr1 = ["mehar","sumon","rishib"];

var arr2 = arr1;

arr2[0] = "lokesh";     // Changing in "arr2" not "arr1"

console.log(arr1);      // Printing "arr1" Value but it's change 