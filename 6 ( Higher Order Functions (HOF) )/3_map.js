


/* map syntex = 

    array_name.map(function(element,index,array){

    })

    NOTE - "map" return the "element" within an "array"
*/

let sweet = ["kova","laddu","Milk-cake"];

let res = sweet.map(function(element,index,array){
    return element;
});

console.log("\n",res,"\n");


/* ---------------------------------------------------------------- */

/* 
    "map" ar disadvantage holo kono condition-er true & false generate kore
    kon value golo "true" seta return korta parena
*/

let nums = [1,3,2,4,6,5,7,8];

let result = nums.map(function (element,index){
    return (element % 2 == 0);
})

console.log(result);