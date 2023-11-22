

                    /*  shift  &  unshift   */


/* Shift remove the first element of the array: */
/* unshift add the element at the beggining of the array: */


let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);  // [ 'Orange','Apple','Mango' ]



let fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.unshift("Lemon", "Pineapple");
console.log(fruit);  // [ 'Lemon','Pineapple','Banana','Orange','Apple','Mango' ]
