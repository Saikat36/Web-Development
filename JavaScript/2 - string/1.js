


// count the names starting from "A"


let names=["Amit", "Nrupul", "Pulkit","Yogesh", "Amar", "Varun"];
// console.log(names);
let count = 0;

for (let i = 0; i < names.length; i++) {
    let x = names[i];
    // console.log(x);
    if (x[0]=="A") {
        count++;
    }
}

console.log(`\nstarting from "A" is ${count}\n`);
