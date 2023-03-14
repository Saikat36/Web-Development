

/*  
     Reduce have 2 process - 
     
    case 1: with no initial value
    case 2: with initial value

*/

            /* Here case 1 applied - with no inital value */

let nums =[3,5,7,8]

var res = nums.reduce(function(acc,el,i,arr){
  return acc+el;
})
console.log(res)        /* here "acc" have no initial value,
                           so "acc" take "nums[0]" as a initial value */


// case 1: with no initial value

// 1st iteration -> 

// acc = nums[0]= 3 , 
// acc = 3, el = 5 , acc+el = 3+5=8, acc = 8
// acc = 8 , el = 7, acc+el=8+7=15, acc = 15
// acc = 15, el=8 , acc+el=15+8=23, acc = 23


/* ---------------------------------------------------------------- */



            /* Here case 2 applied - with initial value */



let array =[3,5,7,8]

let sumOfNums=function(acc,el,i,arr){
  return acc+el;
}

let result = array.reduce(sumOfNums,5);     // initial value = 5 

console.log(result);    /* here "acc" have initial value,
                           and the initial value is = 5 */

/* 

2nd case iteration ->

    acc = 5 , el = 3, acc = 5+3= 8
    acc=8, el=5,acc=8+5=13
    acc=13,el=7,acc=13+7=20
    acc=20,el=8,acc=20+8=28 

*/