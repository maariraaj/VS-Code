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
