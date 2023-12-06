

                      /* This are some popular Array Methos */
                      

/* 1. forEach() Method */

let elements = ['Fire', 'Air', 'Water'];
elements.forEach((element, index) => {
  console.log(`Index ${index}: ${element}`); // Index 0: Fire
                                             // Index 1: Air
                                             // Index 2: Water
});



/* 2. map() Method */

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]




/* 3. filter() Method */

let number = [10, 20, 30, 40, 50];
let numbersGreaterThan30 = number.filter(number => number > 30);
console.log(numbersGreaterThan30);  // Output: [40, 50]




/* 4. reduce() Method */

let num = [1, 2, 3, 4, 5];
let sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);  // Output: 15




/* 5. indexOf() Method */

let fruits = ['apple', 'banana', 'cherry'];
let indexOfBanana = fruits.indexOf('banana');
console.log(indexOfBanana);  // Output: 1




/* 6. reverse() Method */

let element = ['Fire', 'Air', 'Water'];
let reversedElements = element.reverse();
console.log(reversedElements);  // Output: ['Water', 'Air', 'Fire']




/* 7. sort() Method */

let fruit = ['banana', 'apple', 'cherry'];
fruit.sort();
console.log(fruit);  // Output: ['apple', 'banana', 'cherry']



/* 8. splice() Method */

let num2 = [1, 2, 3, 4];
num2.splice(2, 0, 78);  // Inserts 78 at index 2
console.log(num2);     //  Output: [ 1, 2, 78, 3, 4 ]



/* 9. slice() Method */

let el = ['Fire', 'Air', 'Water', "creater", "Destroyer"];

console.log(el.slice(3));     // let el = ['creater', 'Destroyer']
console.log(el.slice(1,3));     // let el = ['Air', 'Water']