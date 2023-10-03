

/* If I want to replace the element at index 2 (which is 3 in this case) with the value 78, effectively removing the number 3 and adding 78 at that position, */


let num = [1, 2, 3, 4];
num.splice(2, 1, 78);  // Inserts 78 at index 2
console.log(num);     //  [ 1, 2, 78, 4 ]




/*          Explain  =  num.splice(2, 1, 78);

2: The first argument is still 2, indicating the index at which we want to start modifying the array.

1: The second argument is now 1, which means we want to remove 1 element starting at index 2 (removing the number 3).

78: The third argument is 78, which is the value we want to insert at index 2 after removing the element.

*/