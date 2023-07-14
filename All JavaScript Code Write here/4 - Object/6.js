



/* For loop in objects */



let saikat = {
    name: "saikat",
    age: 25,
    profession: "Software developer",
    city: "Bankura",
    laptop: "Acer",
    hobby : ["Reading","Writing","Plating Trees"],
    married: false
};


for(let i in saikat)
{
    console.log(i);             // Key name
    console.log(saikat[i]);     // Values
}