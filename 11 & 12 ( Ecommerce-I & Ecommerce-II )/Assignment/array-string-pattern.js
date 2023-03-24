let arr = ["assignment", "problem", "media", "upload"];

let len = arr.filter(function(el){
    return (el[0]=="a" || el[el.length-1]=="a")
})
console.log(len)