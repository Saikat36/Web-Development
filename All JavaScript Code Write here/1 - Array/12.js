


    /*                  Split Function Decode               */




let str = "The quick brown    fox jumps over the lazy dog.";

//step1: Take empty bag and empty array

let bag = "";
let arr = [];


//step2: Run a loop on the str.

for (let i = 0; i < str.length; i++) {
  if (str[i] != " ") {
    bag = bag + str[i];
  }
  else {
    if(bag !=""){
        arr.push(bag);
    }
    bag = "";
  }
}
arr.push(bag);
console.log(arr);
