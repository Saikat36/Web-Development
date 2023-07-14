

/*       How the a methods / function  define in a object     */


let details = {
    name : "saikat",
    age: 25,
    bengali: 87,
    eng: 78,
    math: 90,

/* key name : function(){       // method syntex

    } 
*/
    pintu : function(){       // method define
        console.log("\nHello Pintu\n");
    }
};





/*  Function call - 
                    1. Dot notation
                    2. Bracket notation
*/


details.pintu();    // Dot notation
details["pintu"]();    // Bracket notation