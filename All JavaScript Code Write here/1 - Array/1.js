

            /*      push() & pop() Method    */



let animal = ["pigs", "goats", "sheep"];
let gum = animal.push("horse");


console.log(animal);  // [ 'pigs', 'goats', 'sheep', 'horse' ]
console.log(gum);    // length of the animal arr = 4


let x = animal.pop();

console.log(x);          // return only the pop element = horse
console.log(animal);    // [ 'pigs', 'goats', 'sheep' ]




console.log("\n\n");


let num = [1,2,3,4];

num.push(8,9);
console.log(num);


num.pop();
console.log(num);


num.pop(1);
console.log(num);