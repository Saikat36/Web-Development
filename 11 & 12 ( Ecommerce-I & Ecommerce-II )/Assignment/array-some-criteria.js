let arr = [2, 4, 5, 3, 6, 8];
let x = arr.filter(function(element,index,array){
    return (element%2==0 && index%2==0)
})
console.log(x)