//fetch posts from API or local storage
async function fetchPosts(){
    const response= await fetch(`https://jsonplaceholder.typicode.com/posts`); //?_page=${start}&_limit=${limit}`);
    const data=await response.json();

    renderPosts(data);
}

//render posts to DOM
function renderPosts(data){
    const postsContainer=document.getElementById("posts");

    postsContainer.innerHTML=data.map((post)=>
        `<div class="card mt-3">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.body}</p> 
                <button class="btn btn-danger">Delete</button>
            </div>
        </div>`
    ).join("");
}

//create a new post
async function createPost(){
    const title=document.getElementById("title").value;
    const body=document.getElementById("body").value;

    const newPost={userId:1, title, body};

    const response= await fetch(`https://jsonplaceholder.typicode.com/posts`,{
        method:"POST",
        body:JSON.stringify(newPost),
        headers:{"content-type": "application/json; charset=UTF-8"},
    });
    const data=await response.json();

    let posts=[];

    //console.log("Create post data:", data);

    posts.push(data);

    localStorage.setItem("posts", JSON.stringify(posts));

    renderPosts(posts);
}
fetchPosts();