

// palindrome string


function rev(str) {

    let bag = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      bag = bag + str[i];
    }
    return bag;
  }

let name = "naman";
let reverse = rev(name);

function check(name,reverse){
  if(name==reverse)
  {
    console.log("Palindrome");
  }
  else{
    console.log("Not a palindrome");
  }
}

check(name,reverse);