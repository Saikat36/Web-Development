

let javasc = function(item, time, dobrash){
    dobrash();
    console.log("\nI will eat "+item+" as my breackfast at "+time+" am\n");
}

javasc("maggie",9,dobrash)

function dobrash(){
    console.log("\nDo brash first");
}

/* 
    execution time- 
    line no =    8 -> 3 -> 4 -> 10 -> 11 -> 12 -> 5 -> 6

*/

/* 
    NOTE:  All Higher order Functions are only applicable for Arrays

    Higher order Functions =    1. forEach()
                                2. map() 
                                3. filter() 
                                4. reduce() 

*/