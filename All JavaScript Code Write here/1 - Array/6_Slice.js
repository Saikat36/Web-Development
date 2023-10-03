


let elements = ['Fire', 'Air', 'Water', "creater", "Destroyer"];


console.log(elements.slice(3));     // let elements = ['creater', 'Destroyer']

console.log(elements.slice(1,3));     // let elements = ['Air', 'Water']


/* 

                Let's break down each of them:

1. `elements.slice(3)`:
   This slice operation takes a single argument, which specifies the starting index for the slice. In this case, `3` is the starting index.

   `elements.slice(3)` will return a "new array" starting from the element at index `3` (inclusive) to the end of the original array.

   For the given `elements` array: `['Fire', 'Air', 'Water', 'creater', 'Destroyer']`
   The slice would be: `['creater', 'Destroyer']` because it starts from index `3` ('creater') and includes all elements thereafter.

2. `elements.slice(1, 3)`:
   This slice operation takes two arguments: the starting index and the ending index (exclusive) of the slice. In this case, `1` is the starting index, and `3` is the ending index.

   `elements.slice(1, 3)` will return a "new array" starting from the element at index `1` (inclusive) up to, but not including, the element at index `3`.

   For the given `elements` array: `['Fire', 'Air', 'Water', 'creater', 'Destroyer']`
   The slice would be: `['Air', 'Water']` because it starts from index `1` ('Air') and includes elements up to index `2` ('Water'), but does not include the element at index `3`.

*/