

function check(num){
    
    if(num%2)
    {
        return 12;
    }
    else{
        return 10;
    }
}

let x = check(6);
console.log(x); 




// Calculate the total sum of the character codes


let name1 = "amazn";
let charCode = name1.charCodeAt(0);  // Get the value character at index 0
console.log(charCode);         // Output: 97

let sum=0;

for (let i = 0; i < name1.length; i++) {
    sum += name1.charCodeAt(i);
}

console.log(sum);