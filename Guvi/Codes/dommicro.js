//Color a span/div element content when a user moves the mouse over the element

document.getElementById("change").addEventListener("mouseover", function(){
    this.style.color="red";
});

document.getElementById("change").addEventListener("mouseout", function(){
    this.style.color="black";
});


//Use Prompt to read a value from user and display it in the span element

let name=prompt("Please enter your name:");
// document.getElementById("display").textContent=name;
document.getElementById("display").innerText=name;


//Display the mouse X and Y coordinates in a <span></span> tag when
//you click on a <h1> tag which contains a paragraph</h1>

document.querySelector("h1").addEventListener("click", function(event){
    // console.log(event);
    let coordinates="X:"+event.clientX +",Y:"+event.clientY;
    document.getElementById("mc").textContent=coordinates;
});


//to count number of character in the text area

document.getElementById("txt").addEventListener("input", function(){
    let count=this.value.trim().length;
    document.getElementById("count").innerText=count;
});


//convert a given number from decimal to binary and hexadecimal

function convertNumber(){
    let num=parseInt(prompt("Enter a decimal number:"));
    let binary=num.toString(2);
    let hexadecimal=num.toString(16).toUpperCase();

    alert("Binary: "+binary+"\nHexadecimal: "+hexadecimal);
}
convertNumber();


//Simple Form Validation

document.getElementById("form").addEventListener("submit", function(evnt){
    let user=document.getElementById("user").value;
    let pwd=document.getElementById("pwd").value;

    if(user.trim()==="" || pwd.trim()===""){
        alert("Both username and password are requierd");
        evnt.preventDefault();  //further form will not get submitted.
    }
})

//full screen mode toggle

document.getElementById("enterFullScreen").addEventListener("click",function(){
    if(document.documentElement.requestFullscreen){
        document.documentElement.requestFullscreen();
    }
});

document.getElementById("exitFullScreen").addEventListener("click",function(){
    if(document.exitFullscreen){
        document.exitFullscreen();
    }
});


//key press alert and close window on spacebar

// document.addEventListener("keydown", function(event){
//     alert("The pressed key is "+event.code);
//     if(event.code==="Space"){
//         window.close();
//     }
//     if(event.code==="KeyM"){
//         window.open("http://127.0.0.1:5500/Guvi/dommicro.html");
//     }
// })


//Edit content on hover without any input element

document.getElementById("edit").addEventListener("mouseover", function(){
    this.contentEditable=true;
});

document.getElementById("edit").addEventListener("mouseout", function(){
    this.contentEditable=false;
});