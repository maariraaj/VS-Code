const taskInput=document.getElementById("taskInput");
const addTask=document.getElementById("addTask");
const taskList=document.getElementById("taskList");

//load tasks from local storage when the page loads

loadTasksFromLocalStorage();

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

     checkbox.addEventListener("change", function(){
        if(this.checked){
            li.classList.add("completed");
        }else{
            li.classList.remove("completed");
        }
        // saveTasksToLocalStorage(); //Save tasks to local storage when checkbox state changes
     });

     deleteBtn.addEventListener("click", function(){
        console.log("delete button clicked!!!",li);
        taskList.removeChild(li);
        // saveTasksToLocalStorage(); //Save tasks to local storage when a task is deleted
     });
     

     taskList.appendChild(li);

     saveTasksToLocalStorage(); //save tasks to local storage when a new task is added

    //  saveToLocalStorage("task", taskInput.value);
    //  const task=getFromLocalStorage("task");
    //  console.log("!@#$%^&*()_+", task);

    // saveToSessionStorage("task", taskInput.value);
    //  const task=getFromSessionStorage("task");
    //  console.log("!@#$%^&*()_+", task);





     taskInput.value="";

     //alert(getCurrentUrl());

    //  const url='https://www.google.co.in/';
    //  setUrl(url);

     //alert("Task added successfully!!");

    //alert(isMobileView());

    //let age=prompt("How old are you?",100);
    //alert(`You are ${age} years old!!`);
    //let ageCheck=confirm("Are you 18+ years old?");
    //alert(ageCheck);
    }
    else{
        console.log("No value Entered!!!");
    }
});









// function saveToLocalStorage(key, value){
//     try{
//         localStorage.setItem(key, JSON.stringify(value));
//         console.log("Data saved to local storage.");
//     }catch(error){
//         console.error("Save failed:", error);
//     }
// }

// function getFromLocalStorage(key){
//     try{
//         const value=localStorage.getItem(key);
//         return value ? JSON.parse(value) : null;
//     }catch(error){
//         console.error("Error retreiving data:", error);
//         return null;    
//     }
// }

// function saveToSessionStorage(key, value){
//     try{
//         sessionStorage.setItem(key, JSON.stringify(value));
//         console.log("Data saved to session storage.");
//     }catch(error){
//         console.error("Save failed:", error);
//     }
// }

// function getFromSessionStorage(key){
//     try{
//         const value=sessionStorage.getItem(key);
//         return value ? JSON.parse(value) : null;
//     }catch(error){
//         console.error("Error retreiving data:", error);
//         return null;    
//     }
// }


//resume from already added task 

// Save tasks to localStorage
function saveTasksToLocalStorage() {
    debugger;
    const tasks = Array.from(taskList.children).map((li) => {
      const textElement = li.querySelector("input[type='checkbox']").nextSibling; // Get the text node next to the checkbox
      return {
        text: textElement.textContent,
        completed: li.querySelector("input[type='checkbox']").checked,
      };
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  // Load tasks from localStorage when the page loads
  function loadTasksFromLocalStorage() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    for (const task of savedTasks) {
      createTaskElement(task);
    }
  }
  // Create task elements based on the saved tasks
  function createTaskElement(task) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const deleteBtn = document.createElement("button");
  
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    deleteBtn.innerText = "Delete";
  
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task.text));
    li.appendChild(deleteBtn);
  
    if (task.completed) {
      li.classList.add("completed");
    }
  
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
      saveTasksToLocalStorage();
    });
  
    deleteBtn.addEventListener("click", function () {
      console.log("delete button clicked!!!", li);
      taskList.removeChild(li);
      saveTasksToLocalStorage();
    });
  
    taskList.appendChild(li);
  }
  




//to get url location
function getCurrentUrl(){
    return window.location.href;
}

//to set url
function setUrl(url){
    window.location.href=url;
}

//to check movile view
function isMobileView(){
    return window.innerWidth <= 768;
}

//to scroll to top
function scrollToTop(){
    window.scrollTo(0,0);
}