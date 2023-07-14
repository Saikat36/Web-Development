

/* How to transpose a matrix = ki kore row ke colom and colom ke row banano jabe */


let items=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


let rows=items.length;
let cols=items[0].length;


for (let i = 0; i < cols; i++) {
    let result = "";
    for (let j = 0; j < rows; j++) {
        result = result + items[j][i]+" ";
    }    
    console.log(result);
}
