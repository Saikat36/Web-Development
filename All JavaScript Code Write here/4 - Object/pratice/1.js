

/* 

1. this keyword = If you want to access the values of the keys present in the same object then you have to use "this" keyword 

2. Object method = kono object-er kono function present thakle seta ke object method bole       */


let saikat = {
    name: "saikat",
    age: 26,
    print: function(){          // Object method
        console.log("name is",this.name,"and age is",this.age);
    }
};

saikat.print();
saikat["print"]();