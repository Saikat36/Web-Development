

/* 8.js example written here again bcz I have to open this example many time for solution of 14.js problem


let obj = {};

obj["name"] = "Saikat";       // Bracket notation

obj.Address = "Bangalore";  // Dot notation 

console.log(obj);

*/

// ---------------------------------------------------------



let product = ["macbook","iphone","ipad"];
let price = [125000,97000,79000];


/* output should like this - 

    data = [
        {poduct:"macbook", price: 125000}
        {poduct:"iphone", price: 97000}
        {poduct:"ipad", price: 79000}
    ]
*/

let data = [];

for(let i=0; i<product.length; i++)
{
    let obj = {};

    obj.product = product[i];
    obj.price = price[i];

    data.push(obj);
}

console.log(data);

