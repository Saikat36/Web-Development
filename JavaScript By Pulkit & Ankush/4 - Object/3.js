



let saikat = {
    name: "saikat",
    age: 25,
    profession: "Software developer",
    city: "Bankura",
    laptop: "Acer",
    hobby : ["Reading","Writing","Plating Trees"],
    married: false
};

let bag = saikat.hobby;
console.log(bag);

for (let i = 0; i < bag.length; i++) {
    console.log(bag[i]);    
}