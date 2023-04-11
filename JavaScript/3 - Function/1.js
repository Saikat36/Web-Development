



                    /* Check Palindrome */



function rev_string(str) {
    let bag = "";
    
    for (let i = str.length - 1; i >= 0; i--) { 
        bag = bag + str[i]; // concatenation
    }
    return bag;
}
    
function check(a, b) {
    if (a === b) { 
        console.log("Palindrome");
    } 
    else {
        console.log("Not a Palindrome");
    }
}

let input = "121";
let reversed_input = rev_string(input);

check(input, reversed_input);