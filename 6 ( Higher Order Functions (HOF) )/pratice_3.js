


        /* map method */

        
/*  NOTE - "map" return the "element" within an "array" */


let arr = [2,4,6,8];


let okArr = arr.map(function(el,i,array){
    return el*2;
});

console.log(okArr);


/* --------------------------------------- */


let multiply = function (el){
    return el*2;
}

let res = arr.map(multiply)

console.log(res);



/* --------------------------------------- */


/* 
    "map" ar disadvantage holo kono condition-er true & false generate kore
    kon value golo "true" seta return korta parena
*/

let nums = [1,3,2,4,6,5,7,8];

let result = nums.map(function (element,index){
    return (element % 2 == 0);
})

console.log(result);