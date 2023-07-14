


let items=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


let rows=items.length;
let cols=items[0].length;


for (let i = cols-1; i >= 0; i--) {
    let result = "";
    for (let j = rows-1; j >= 0 ; j--) {
        result = result + items[i][j]+" ";
    }    
    console.log("\n"+result);
}
