

                    /*  Continue & Break Statement  */


/* Continue */


for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j == i) {
      continue;   // "continue" a 2nd no for loop er বাইরে বেরিয়ে যায় না
    }
    console.log("i=", i, "&", "j=", j);
  }
}



console.log ("_____________________________\n");



/* Break */


for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j == i) {
      break;    // "break" a 2nd no for loop er বাইরে বেরিয়ে যায়
    }
    console.log("i=", i, "&", "j=", j);
  }
}


// break use hole  