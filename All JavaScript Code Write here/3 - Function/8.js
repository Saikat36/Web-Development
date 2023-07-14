


let str = "The Quick     Brown Fox Jumps Over";

let bag = "";
let arr = [];

for (let i = 0; i < str.length; i++) {
    if (str[i]!=" ") {
        bag = bag+str[i];
    }    
    else{
        if(bag!="")
        {
            arr.push(bag);
        }
        bag="";
    }
}
arr.push(bag);
console.log(arr);