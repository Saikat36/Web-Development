

// Loops in Multidimensional arrays

//step1: Declare a 3x3 matrix(Multidimensional array)

    let items=[
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    
//step2: Find the number of rows and columns

    let rows=items.length;
    let cols=items[0].length;

    for (let i=0; i<rows; i++){
        let bag="";
        for (let j=0;j<cols;j++){
            bag = bag+items[i][j]+" ";
        }
    console.log(bag);
    }
    