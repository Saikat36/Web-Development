


/* Pratice */


let obj = {
    name: "Ajay",
    DOB : "1st jan, 1996",
    place: "Bangalore",
    pre : function(){
        console.log("name: "+ this.name, " , DOB : "+ this.DOB, " , place: " + this.place);
    }
};

obj.pre();