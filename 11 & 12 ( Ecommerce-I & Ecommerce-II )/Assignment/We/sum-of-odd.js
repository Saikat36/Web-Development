let nums = [1,2,3,4];
let result = nums.filter(function(el){
    return el%2==1
})

let out = result.reduce(function(acc,el){
    return acc+el
})
console.log(out)