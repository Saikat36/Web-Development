
            

                    /* toUpperCase Method Explain */



function convertToUpperCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let isLowerCase = char >= "a" && char <= "z";

    if (isLowerCase) {
      // Convert to uppercase by adjusting the ASCII value
      result += String.fromCharCode(char.charCodeAt() - 32);
    } else {
      result += char;
    }
  }

  return result;
}

let sentence = "The quick brown fox jumps over the lazy dog.";
let x = convertToUpperCase(sentence);
console.log(x);
