

/* forEach syntex = 

    array_name.forEach(function(element,index,array){

    })

    NOTE - "forEach" doesn't return anything
*/


let sweets = ["kova","laddu","Milk-cake"];

let res = sweets.forEach(function(element,index,array){
    return element;     /* "forEach" doesn't return anything */
})

console.log("\n"+res);
console.log("\n---------------------------------------------\n");


/* ---------------------------------------------------------------- */



let sweet = ["kova","laddu","Milk-cake"];

let box =[];

sweet.forEach(function(element,index,array){
    console.log(element,index);
    // console.log(array);
    box.push(element);
})

console.log(box);
