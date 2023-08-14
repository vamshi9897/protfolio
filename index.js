let div=document.getElementById("about");




function skill(){
    div.textContent = ""
    let p=document.createElement("p");
    p.textContent = "Front end";
    let p2=document.createElement("p");
    p2.textContent="HTML,CSS.JS,REACT"
    let p3=document.createElement("p");
    p3.textContent="backend"
    p4=document.createElement("p");
    p4.textContent="Python,MySql"

    p.classList.add("skill");
    p2.classList.add("skill1");
    p3.classList.add("skill");
    p4.classList.add("skill1");

    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    

}

function Experience(){
    div.textContent = "";
    p5=document.createElement("p");
    p5.textContent = "2023(current)";
    p6=document.createElement("p");
    p6.textContent = " gaining expereince"

    div.appendChild(p5);
    div.appendChild(p6);
    p5.classList.add("skill");
    p6.classList.add("skill1");
}

function Education(){
    div.textContent = "";
    p7=document.createElement("p");
    p7.textContent = "B-tech";
    p8=document.createElement("p");
    p8.textContent = "Malla Reddy University"
    p9=document.createElement("p");
    p9.textContent = "Intermediate"
    p10=document.createElement("p");
    p10.textContent = "Sri Chaitanya "
    p11=document.createElement("p");
    p11.textContent = "School";
    p12=document.createElement("p");
    p12.textContent ="Gowtham Model School"
    div.appendChild(p7);
    div.appendChild(p8);
    div.appendChild(p9);
    div.appendChild(p10);
    div.appendChild(p11);
    div.appendChild(p12);
    p7.classList.add("skill");
    p9.classList.add("skill");
    p11.classList.add("skill");
    p8.classList.add("skill1");
    p10.classList.add("skill1");
    p12.classList.add("skill1");
}