

                    /* Check Palindrome */
                    

function rev_string(str)
{
    let bag="";
    
    for (let i=str.length-1; i>=0; i--)
    { 
        bag= bag+str[i] // concatenation
    }
    return bag;
    }
    let name="121";
    let reversed_name=rev_string(name);
    
    function check(a,b){
    if(a==b){ 
        console.log("Palindrome");
    } 
    else {
    console.log("Not a Palindrome");
    }
}

check(name,reversed_name);