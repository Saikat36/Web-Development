

            //sort strings

let names = ["saikat","tanuj","chandra"];

names.sort(function(a, b) {
    if(a>b) return -1
    if(a<b) return 1
    return 0
})
console.log("\n");
console.log(names);


/* -------------------------------------------------- */


            //sort number

let numbers = [4,2,7,1,8,10];

numbers.sort(function(a,b){
    return a-b // descending -> b-a
})

console.log(numbers);
console.log("\n");
console.log("--------------------------------------------------");


/* ------------------------------------------------------------------------- */

console.log("\n Object Sort by name :- \n");

/* ------------------------------------------------------------------------- */


                    // Object Sort by name


let phones = [
    {name:"samsung", price: 50000},
    {name: "apple", price: 80000},
    {name:"oneplus", price: 40000}
]
// Sorting "object-name" by assending order

    phones.sort(function(a,b)
    {
        if(a.name>b.name) return 1
        if(a.name<b.name) return -1
        return 0
    })

console.log(phones) // Assending order sort


// Sorting "object-name" by Decending order

    phones.sort(function(a,b)
    {
        if(a.name>b.name) return -1
        if(a.name<b.name) return 1
        return 0
    })

console.log(phones) // Decending order sort
console.log("--------------------------------------------------");


/* ---------------------------------------------------------------------- */

console.log("\n Object Sort by price :- \n");

/* ------------------------------------------------------------------------- */


                    // Object Sort by price


let price = [
    {name:"samsung", price: 50000},
    {name: "apple", price: 80000},
    {name:"oneplus", price: 40000}
]

// Sorting "object-price" by Assending order

price.sort(function(a,b){
    return a.price-b.price;
});
console.log(price);


// Sorting "object-price" by Decending order

price.sort(function(a,b){
    return b.price-a.price;
});
console.log(price);


