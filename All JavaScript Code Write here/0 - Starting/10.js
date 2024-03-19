



/* Reverse Right Angle Triangle Pattern */


for (let i = 5; i >= 1; i--) {

    let jhola = "";

    for (let j = 1; j <= i ; j++) {
        jhola = jhola+"*";        
    }
    console.log(jhola);
}



                /* Another Method  */



for (let i = 1; i <= 5; i++) {

    let jhola = "";

    for (let j = 5; j >= i ; j--) {
        jhola = jhola+"*";        
    }
    console.log(jhola);
}

