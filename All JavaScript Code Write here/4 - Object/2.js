
    /* Deleting */


let saikat = {
    name: "saikat",
    age: 25,
    profession: "Software developer",
    city: "Bankura",
    laptop: "Acer",
    married: false
};


// bracket notation 

delete saikat["city"];
console.log(saikat);


// Dot notation

delete saikat.married;
console.log(saikat);