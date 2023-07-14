


// count the names that contain "A" or "a"


let names=["Amit", "Nrupul", "Pulkit","Yogesh", "Amar", "Varun"];
let count = 0;

for (let i = 0; i < names.length; i++) {
    let x = names[i];
    for (let j = 0; j < x.length; j++) {
        if (x[j]=="A" || x[j]=="a") {
            count++;
            break;   // break na korla "Amar" name-
        }           // -tai 2 bar "A" and "a" count ho66ilo 
    } 
}

console.log(`\nThe names that contain "A" or "a" is = ${count}\n`);
