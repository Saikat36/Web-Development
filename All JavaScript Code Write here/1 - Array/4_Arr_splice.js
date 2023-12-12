

/* So as you can see, If I want to add 78 at the possition of index 2 using push method then as a result get Error, because number do not have push method, 

so now if I want to add 78 at the index 2 then use splice method */


/*      The splice method takes three parameters:

1. The index where you want to start modifying the array.
2. The number of elements to remove (in this case, we're not removing any elements, so it's 0).
3. The value you want to insert at the specified index (in this case, 78).

*/


let num = [1, 2, 3, 4];

num.splice(2, 0, 78);  // Inserts 78 at index 2
console.log(num);     //  [ 1, 2, 78, 3, 4 ]




let num2 = [1, 2, 3, 4];

num2.splice(1, 2, 78);  // Inserts 78 at index 1
console.log(num2);     //  [ 1, 78, 4 ]





/*          Explain  =  num.splice(2, 0, 78);

2: The first argument to splice is the index at which we want to start modifying the array. In this case, we want to start at index 2.

0: The second argument is the number of elements to remove. In this case, we don't want to remove any elements, so we specify 0.

78: The third argument is the value we want to insert at the specified index (index 2 in this case). Here, we want to insert the value 78.

*/