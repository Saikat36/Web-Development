

/* Print all the number of the times each character apperes */

/* ortat print korta hobe akta string a koto bar each and every character present a6e */


let str = "masai";

let obj = {};

for (let i = 0; i < str.length; i++) 
{
    let character = str[i];

    if (obj[character]==undefined) 
    {
        obj[character] = 1;
    }
    else{
        obj[character]++;
    }
        
}

console.log(obj);