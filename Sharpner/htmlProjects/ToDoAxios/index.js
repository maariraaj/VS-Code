const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  axios
    .get("https://crudcrud.com/api/44effa3b5d724668900720a1b938870b/todo")
    .then((response)=>console.log(response.data))
    .catch((error)=>console.log(error));
}

function postTodo() {
  axios
    .post("https://crudcrud.com/api/44effa3b5d724668900720a1b938870b/todo", {
        title: "Learn Axios",
        completed: false 
    })
    .then((response)=> console.log(response))
    .catch((error)=> console.log(error));
}

function putTodo() {
  axios
    .put("https://crudcrud.com/api/44effa3b5d724668900720a1b938870b/todo/65f842ac1492af03e8f0e90c",
    {
        title: "Learn Axios",
        completed: true
    })
    .then((response)=> console.log(response))
    .catch((error)=> console.log(error));
}

function deleteTodo() {
  axios
   .delete("https://crudcrud.com/api/44effa3b5d724668900720a1b938870b/todo/65f842ac1492af03e8f0e90c")
   .then((response)=> console.log(response))
   .catch((error)=> console.log(error));
}
