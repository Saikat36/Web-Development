



        /* reduce method */



let nums = [3,5,7,8];

let res = nums.reduce(function(accumulator,el,i,arr){
    return (accumulator+el);
})

console.log(res);


/* case1: with no initial value
   case2: with initial value    */


/*    
        case1: with no initial value


1st iteration ->

accumulator/acc = nums[0] = 3,  el = 5, acc+el = 3+5 = 8

2nd iteration ->

accumulator/acc = 8,  el = 7, acc+el = 8+7 = 15

3rd iteration ->

accumulator/acc = 15,  el = 8, acc+el = 15+8 = 23

*/