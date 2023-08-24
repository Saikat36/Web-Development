



        /* reduce method */



let nums = [3,5,7,8];

let sumOfNums = function(accumulator,el,i,arr){
    return (accumulator+el);
}

let res = nums.reduce(sumOfNums,6)

console.log(res);


/* case1: with no initial value
   case2: with initial value    */


/* 
            case2: with initial value

acc = 6,  el = 3,  acc+el = 6+3 = 9
acc = 9,  el = 5,  acc+el = 9+5 = 14
acc = 14,  el = 7,  acc+el = 14+7 = 21
acc = 21,  el = 8,  acc+el = 21+8 = 29

*/