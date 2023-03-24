let nums =  [1, 2, 3, 4, 5, 6];
let result = nums.filter(function(el){
    return el%3==0
})

let out = result.reduce(function(acc,el){
    return (acc**3)+(el**3)
})
console.log(out)