



        /* filter method */

/* 
    "filter" ar advantage holo kono condition-er modha jegolo true sei "element" golo return kore

    NOTE:- "filter" return single value
*/


let nums = [3,4,6,8,9];

let res = nums.filter(function(el){
    return el%2==0
});

console.log(res);


// filter is returning elements where condition is true



let arrOfObjj = [{name:"prateek",place:"bangalore"},
{name:"Nrupul",place:"viajawada"},
{name:"Yogesh",place:"bangalore"}]

let ret = arrOfObjj.map(function(el){
    return el.name;
})

console.log(ret);