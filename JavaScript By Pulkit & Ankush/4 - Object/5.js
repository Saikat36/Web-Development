

/* Difference between Dot notation & Bracket notation */

let saikat = {
    name: "saikat",
    age: 25,
    profession: "Software developer",
    city: "Bankura",
    laptop: "Acer",
    hobby : ["Reading","Writing","Plating Trees"],
    married: false
};


// Bracket notation

let x = "city";
console.log(saikat[x]);


// Dot notation     -> In that senioreo Dot notation is failed 

let y = "city";
console.log(saikat.y);      // undefined 

