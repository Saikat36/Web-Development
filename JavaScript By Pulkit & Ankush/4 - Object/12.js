

/*      Find the sum of elements whose occurency is 2    */

/* step 1 = Find Frequency of each no
   step 2 = Sum of this no, whose occurency is 2  */


let arr = [1,4,3,6,3,2,6];

let obj = {};

for (let i = 0; i < arr.length; i++) 
{
    let key = arr[i];

    if (obj[key] == undefined) 
    {
        obj[key] = 1;
    }
    else{
        obj[key]++;
    }
}

let sum = 0;

for(let key in obj)
{
    if(obj[key]==2){
        sum = sum+Number(key);  // "key" is a string so convert in number
    }
}

console.log("sum is: ",sum);



/* 

# Four Combination of storing the data:- 

    1. Object inside object (nested object )
    2. Array inside object
    3. object inside arrays.
    4. Array inside an Arrey. (multidimensional array)

*/