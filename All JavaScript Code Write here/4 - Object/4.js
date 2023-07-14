

/*          Nested Object        */




let saikat = {
    name: "saikat",
    age: 25,
    profession: "Software developer",
    city: "Bankura",
    laptop: "Acer",
    hobby : ["Reading","Writing","Plating Trees"],

    address:                /* Nested Object  */
    {  
        city: "Bangalore",
        pin: "121",
        state: "Karnataka"
    }    
};


// bracket notation 

console.log(saikat["hobby"][2]);


// dot notation

console.log(saikat.hobby[2]);


// dot notation

console.log(saikat.address.city);


// bracket notation

console.log(saikat["address"]["city"]);

