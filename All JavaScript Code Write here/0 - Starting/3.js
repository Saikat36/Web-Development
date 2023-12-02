

// Reverse a string


function rev(str) {

  let bag = "";

  for (let i = str.length - 1; i >= 0; i--) {
    bag = bag + str[i];
  }
  return bag;
}


console.log(rev("masai"));