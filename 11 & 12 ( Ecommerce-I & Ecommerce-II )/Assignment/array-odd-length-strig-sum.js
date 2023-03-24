 
 let arr = ["A", "Good", "Problem"]; 
 
 let x = arr.filter(function(el){ 
   return (el.length%2==1) 
 }).map(function(el){ 
   return (el.length)  
 }).reduce(function(sum,el){ 
   return (sum+el) 
 }) 
    
 console.log(x) 