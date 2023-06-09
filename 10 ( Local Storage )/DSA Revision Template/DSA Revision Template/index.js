
document.querySelector("form").addEventListener("submit", myDSA); 
let queArr = [];
function myDSA (event) { 
    event.preventDefault();
    let queObj = {
        queTitle: document.querySelector("#title").value, 
        queLink: document.querySelector("#link").value, 
        queDifficulty: document.querySelector("#difficulty").value, 
    };
    
    queArr.push(queObj);
    //queArr.length = 2 
    displayTable (queArr);
}

function displayTable (queArr) {
    document.querySelector("tbody").innerHTML = "";
    queArr.forEach(function (elem) { 
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = elem. queTitle;
        let td2 = document.createElement("td");
        td2.innerText = elem.queLink;
        let td3= document.createElement("td");
        td3.innerText = elem.queDifficulty; 
        let td4 = document.createElement("td");
        if (elem.queDifficulty == "Easy") {
            td4.innerText = "No";
        } 
        else {
            td4.innerText = "Yes";
        }
        tr.append(td1, td2, td3, td4);
        document.querySelector("tbody").append(tr);
    });
}