

/* If I want to add 78 at the possition of index 2 using push method then see what result we get */


let num = [1,2,3,4];


num[2] = 200 ;
console.log(num);       //  [ 1, 2, 200, 4 ]


num.push(64);
console.log(num);       //  [ 1, 2, 200, 4, 64 ]


num[2].push(78);       // Error because num[2] is a number (3 in this case), and numbers do not have a push method. The push method is used to add elements to the end of an array.
console.log(num);

