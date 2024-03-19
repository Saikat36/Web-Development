

/* 

        1
        *   
        2   
        **  
        3   
        *** 
        4   
        ****
        5   
        *****

*/


for (let i = 1; i <= 5; i++) {

    let jhola = "";
    let star = "";

    for (let j = 1; j <= i ; j++) {
        jhola = j;
        star = star+"*";        
    }
    console.log(jhola);
    console.log(star);
}