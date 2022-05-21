var form = document.getElementById("form");
form.addEventListener("submit",fetchData);

let tbody=document.getElementById("body");

let students=JSON.parse(localStorage.getItem("students")) || [];

let trash=JSON.parse(localStorage.getItem("trash")) || [];

let unit1=document.querySelector(".unit1")
let unit2=document.querySelector(".unit2")
let unit3=document.querySelector(".unit3")
let unit4=document.querySelector(".unit4")
let unit5=document.querySelector(".unit5")
let unit6=document.querySelector(".unit6")


//let simp;

let unit={
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
}


displayData(students);


function fetchData(){

    event.preventDefault();

    let obj={
        name: form.name.value,
        course: form.course.value,
        unit:form.unit.value,
        image:form.image.value,
        batch:form.batch.value
    }

    for(let value in obj){
        if(obj[value].length<1){
            alert("please fill all asked details");
            return;
        }
    }

    students.push(obj)

    localStorage.setItem("students",JSON.stringify(students));
    
    let inputs=document.querySelectorAll("#name,#course,#unit,#image,#batch");
    inputs.forEach(inputs => inputs.value=null);

    //window.location.href="index.html"
    location.reload();


}



function displayData(arr){

    tbody.innerHTML="";

    arr.forEach(function(elem,i){

        let tr=document.createElement("tr");

        let td0=document.createElement("td");
        let img=document.createElement("img")
        img.setAttribute("src",elem.image)
        img.setAttribute("id","profile");
        td0.setAttribute("id","tableImage");

        td0.append(img)


        let td1=document.createElement("td");
        td1.innerText=elem.name;

        let td2=document.createElement("td");
        td2.innerText=elem.course

        let td3=document.createElement("td");
        td3.innerText=elem.unit

        simp=elem.unit

        //strength(simp);

        let td4=document.createElement("td");
        td4.innerText=elem.batch

        let td5=document.createElement("td")
        td5.innerText="Delete"

        td5.style.backgroundColor="red"
        td5.style.color="black"
        td5.style.fontWeight="bold"
        td5.style.cursor="pointer"
        let temp=arr[i]
        td5.addEventListener("click",function(elem){
            trash.push(temp);
            localStorage.setItem("trash",JSON.stringify(trash));
            deletion(elem,i);
        })

        tr.append(td0,td1,td2,td3,td4,td5)

        tbody.append(tr);

    })

    strength(students);

    
}

function strength(arr){

    arr.forEach(function(elem){

        let simp=elem.unit;

        unit[simp]=unit[simp]+1 || 1;
        //console.log("cancel")
    })

    unit1.innerText=unit["1"];
    unit2.innerText=unit["2"];
    unit3.innerText=unit["3"];
    unit4.innerText=unit["4"];
    unit5.innerText=unit["5"];
    unit6.innerText=unit["6"];

}



function deletion(ar,i){

    students.splice(i,1)

    localStorage.setItem("students",JSON.stringify(students));

    unit={
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0
    }

    displayData(students);


}


