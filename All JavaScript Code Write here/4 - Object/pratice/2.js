

/*              join function            */


let obj = {
    name: "saikat",
    age: 25,
    hobbies : ["Reading","Writing","Plating Trees"],

    print:function(){
        console.log("Hello",this.name);
        console.log("Age is",this.age);
        let output = this.hobbies.join(" , ");      // join function
        console.log("Hobbies are",output);
        console.log(typeof(output));
    }
};

obj.print();