

          /* This are some popular String Methods */




/*             1. **`length`**             */

let str1 = "Hello, world!";
console.log(str1.length); // Output: 13



/*             2. **`toUpperCase`**             */

let str2 = "hello";
console.log(str2.toUpperCase()); // Output: "HELLO"



/*             3. **`toLowerCase`**             */

let str3 = "WORLD";
console.log(str3.toLowerCase()); // Output: "world"



/*             4. **`charAt`**             */

let str4 = "hello";
console.log(str4.charAt(1)); // Output: "e"



/*             5. **`indexOf`**             */

let str5 = "hello world";
console.log(str5.indexOf("world")); // Output: 6



/*             6. **`substring`**             */

let str6 = "hello world";
console.log(str6.substring(6, 11)); // Output: "world"



/*             7. **`split`**             */

let str7 = "apple,banana,cherry";
let arr = str7.split(",");
console.log(arr); // Output: ["apple", "banana", "cherry"]



/*             8. **`replace`**             */

let str8 = "Hello, world!";
let newStr = str8.replace("world", "there");
console.log(newStr); // Output: "Hello, there!"



/*             9. **`trim`**             */

let str9 = "  Hello, world!  ";
console.log(str9.trim()); // Output: "Hello, world!"



/*             10. **`concat`**             */

let str10 = "Hello, ";
let str11 = "world!";
console.log(str10.concat(str11)); // Output: "Hello, world!"



/*             11. **`slice`**             */

let str12 = 'Hello, World!';
let str13 = str12.slice(7, 12);  // Slice characters from index 7 to 11
console.log(str13);  // Output: "World"
