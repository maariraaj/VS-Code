let id=1;
function handleFormSubmit(event){
    event.preventDefault();

    if(event.target.category.value !=="select"){
        let expObj={
            id: id,
            expAmount: event.target.exAmount.value,
            description: event.target.description.value,
            category: event.target.category.value
        }
        id++;
        let expObj_new = JSON.stringify(expObj);
    
        localStorage.setItem(expObj.id, expObj_new);
    
        let getExpObj = localStorage.getItem(expObj.id);
    
        let obj_getExp = JSON.parse(getExpObj);
    
        const uList=document.getElementById('myList');
        const liList=document.createElement('li');
    
        const space1= document.createTextNode(' ');
        const space2= document.createTextNode(' ');
        const amount = document.createTextNode(obj_getExp.expAmount); 
        const desc = document.createTextNode(obj_getExp.description);
        const cate = document.createTextNode(obj_getExp.category);
    
        liList.appendChild(amount);
        liList.appendChild(space1);
        liList.appendChild(desc);
        liList.appendChild(space2);
        liList.appendChild(cate);
        liList.setAttribute("class", "list-group-item text-white bg-dark");
    
        uList.appendChild(liList);
    
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Expense";
        deleteButton.onclick = function () {
          localStorage.removeItem(expObj.id);
          liList.remove();
        };
        deleteButton.setAttribute("class", "btn btn-danger m-3")
        liList.appendChild(deleteButton);
    
        const editButton = document.createElement("button");
        editButton.textContent = "Edit Expense";
        editButton.onclick = function () {
            event.target.exAmount.value = obj_getExp.expAmount;
            event.target.description.value = obj_getExp.description;
            event.target.category.value = obj_getExp.category;
            localStorage.removeItem(expObj.id);
            liList.remove();
        };
        editButton.setAttribute("class", "btn btn-info m-3");
        liList.appendChild(editButton);
    
        event.target.exAmount.value = "";
        event.target.description.value = "";
        event.target.category.value = "select";
    }
   
}