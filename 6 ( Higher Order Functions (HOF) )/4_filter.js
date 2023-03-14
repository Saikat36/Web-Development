

/* 
    "filter" ar advantage holo kono condition-er modha jegolo true sei "element" golo return kore

    NOTE:- "filter" return single value
*/

let nums = [1,3,2,4,6,5,7,8];

let result = nums.filter(function (element,index){
    return (element % 2 == 0);
})

console.log(result);


/* ---------------------------------------------------------------- */



let num = [4,6,5,2,9,7,8];

let isEven = function (element,index){
    return (element % 2 == 0);
};

let res = num.filter(isEven);

console.log(res);