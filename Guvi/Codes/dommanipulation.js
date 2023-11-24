//  const secondList=document.getElementById("sec-li");
//  const firstList=document.querySelector("li");
//  const allItemsLi=document.querySelectorAll("li");
//  const allItemsPara=document.querySelectorAll("p");
//  console.log(secondList);
//  console.log(firstList);
// console.log(allItemsLi);
// console.log(allItemsPara);
// console.log(allItemsPara[3]);
// console.log(allItemsPara.length);
// allItemsPara.forEach((p)=>{
//     console.log(p);
// });
// const clsList=document.getElementsByClassName("list");
// console.log(clsList);

// const eachItems=document.getElementsByTagName("li");
// console.log(eachItems);        






const allItemsLi=document.querySelectorAll("li");
// allItemsLi[0].value=7;
// allItemsLi[0].textContent="Prabha";

// // allItemsLi[0].style.color="purple";
// // allItemsLi[0].style.padding="10px";
// // allItemsLi[0].style.border="3px dotted blue"; 
// // allItemsLi[0].style.backgroundColor="aqua"; 

// allItemsLi[0].setAttribute("class", "firstLi");


// allItemsLi[1].style.backgroundColor="lightblue";

function changeFunc(){
    allItemsLi[0].setAttribute("class", "firstLi");
    allItemsLi[0].style.backgroundColor="black";
    allItemsLi[1].style.backgroundColor="lightcoral";
    allItemsLi[0].value=7;
    allItemsLi[0].textContent="Muthuprabha";
}

function unchangeFunc(){
    allItemsLi[0].removeAttribute("class", "firstLi");
    allItemsLi[1].removeAttribute("class", "firstLi");
    allItemsLi[2].removeAttribute("class", "firstLi");
    allItemsLi[0].style.backgroundColor="white";
    allItemsLi[1].style.backgroundColor="white";
    allItemsLi[2].style.backgroundColor="white";
    allItemsLi[0].value=1;
    allItemsLi[0].textContent="List item 1";
    allItemsLi.forEach((item)=>{
        item.classList.remove("large");
    })
}

function changeAll(){
    allItemsLi.forEach((item)=>{
        item.setAttribute("class", "firstLi large");
    })
}

const p=document.createElement("p");
// const text=document.createTextNode("This is the CIty Of BIYEMR");
// p.appendChild(text);
p.innerText="This is the CIty Of BIYEMR";
// document.body.append(p);

const p1=document.createElement("p");
// const text1=document.createTextNode("This is the CIty Of BETEKAY");
// p1.appendChild(text1);
p1.innerText="This is the CIty Of BETEKAY";


// document.body.appendChild(p,p1);
// document.body.append(p,p1);

// document.getElementById("scrollable").append(p);
// document.getElementById("scrollable").prepend(p);
document.getElementById("scrollable").prepend(p,p1);


// document.getElementById("scrollable").innerHTML +="<p>!!!!!!!!</p>";

const txt=document.getElementById("text");
console.log("InnerText:", txt.innerText);
console.log("InnerHTML:", txt.innerHTML);
console.log("TextContent:", txt.textContent);

document.getElementById("text").innerHTML +=`<div id="text">
Text Div
    <p>Text 1</p>
    <p>Text 2</p>
    <p>Text 3</p>
</div>`;