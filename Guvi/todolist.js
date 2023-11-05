const taskInput=document.getElementById("taskInput");
const addTask=document.getElementById("addTask");
const taskList=document.getElementById("taskList");

addTask.addEventListener("click", function(){
    const taskValue=taskInput.value.trim();
    // console.log("Entered task value!!!", taskValue,taskValue.length);
    if(taskValue.length){
        const li=document.createElement("li");
        const checkbox=document.createElement("input");
        const deleteBtn=document.createElement("button");
        const txtNode=document.createTextNode(`${taskValue}`);
     
     checkbox.type="checkbox";
     deleteBtn.innerText="Delete";

     li.appendChild(checkbox);
     li.appendChild(txtNode);
     li.appendChild(deleteBtn);

     checkbox.addEventListener("click", function(){
        if(this.checked){
            li.classList.add("completed");
        }else{
            li.classList.remove("completed");
        }
     })

     deleteBtn.addEventListener("click", function(){
        taskList.removeChild(li);
     });
     

     taskList.appendChild(li);

     taskInput.value="";
    }
    //else{
    //     console.log("No value Entered!!!");
    // }
});