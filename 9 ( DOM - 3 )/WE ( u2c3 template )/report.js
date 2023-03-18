// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",myfunction);

function myfunction(event)
{
    event.preventDefault();

    let avtar = document.querySelector("#image").value;
    let name = document.querySelector("#name").value;
    let batch = document.querySelector("#batch").value;
    let dsa = document.querySelector("#dsa").value;
    let cs = document.querySelector("#cs").value;
    let coding = document.querySelector("#coding").value;

    // console.log(img,name,batch,dsa,cs,coding);

    let tr = document.createElement("tr");      /* This is row */
    
    let td1 = document.createElement("td");     /* column */
    let imag = td1.createElement("img");
    let x = imag.setAttribute("src",avtar);
    td1.append(x);

    let td2 = document.createElement("td");     /* column */
    td2.innerText = name;
    let td3 = document.createElement("td");     /* column */
    td3.innerText = batch;
    let td4 = document.createElement("td");     /* column */
    td4.innerText = dsa;
    let td5 = document.createElement("td");     /* column */
    td5.innerText = cs;
    let td6 = document.createElement("td");     /* column */
    td6.innerText = coding;

    let total = Number(dsa)+Number(cs)+Number(coding)
    let avrage = (total/30)*100;
    let td7 = document.createElement("td");     /* column */
    td7.innerText = avrage.toFixed(2);

    let td8 = document.createElement("td");     /* column */
    if(avrage<50){
        td8.innerText = "Async";
        td8.style.color = "white"
        td8.style.backgroundColor = "red"
    }
    else{
        td8.innerText = "Regular";
        td8.style.color = "white"
        td8.style.backgroundColor = "green"
    }

    let td9 = document.createElement("td");     /* column */
    td9.innerText = "DELETE";
    td9.style.color = "blue"
    td9.style.backgroundColor = "pink"
    td9.addEventListener("click",myfun);
    function myfun(event){
        event.target.parentNode.remove();
    }


    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
    document.querySelector("tbody").append(tr);




}


/*  For deleteing the row  = event.target.parentNode.remove()  */