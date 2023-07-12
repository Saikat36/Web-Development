
/*     setInterval syntex = setInterval(function_name,time_in_milisec)    */

function test(){
    console.log("hello");
}

let stop = setInterval(test,2000);

clearInterval(stop)