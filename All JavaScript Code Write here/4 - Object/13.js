

/* 
 Four Combination of storing the data:- 

    1. Object inside object (nested object )
    2. Array inside object
    3. object inside arrays.
    4. Array inside an Arrey. (multidimensional array)
*/


/* first 2 option are alredy discuss now see - 3. object inside arrays. */

/* Problem:  Find the products whose price is more than 5000 but less than 10000 */


let amazon=[
    {name:"speakers", price: 5400, rating:4},
    {name: "headphones", price: 3000, rating: 3},
    {name:"playstation", price: 50000, rating:5},
    {name: "watch", price: 3000, rating:4}
];

for(let key in amazon)
{
    if(amazon[key].price > 5000 && amazon[key].price < 10000)
    {
        console.log("The Product name is : ",amazon[key].name, "\nThe Product rating is : ",amazon[key].rating);
    }
}