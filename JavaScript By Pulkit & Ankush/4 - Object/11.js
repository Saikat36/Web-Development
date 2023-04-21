


/* Find the frequency of each element in the array */


let str = [1,4,3,6,3,2,6];

let obj = {};

for (let i = 0; i < str.length; i++) 
{
    let elem = str[i];

    if (obj[elem]==undefined) 
    {
        obj[elem] = 1;
    }
    else{
        obj[elem]++;
    }        
}


for(let key in obj)
{
    console.log(key+" --> "+obj[key]);
}
