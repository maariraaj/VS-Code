const blogForm = document.getElementById("blogForm");
const blogsAccordion = document.getElementById("blogsAccordion");

function loadBlogs() {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs.forEach(({ id, title, author, description, comments }) => {
        addBlogToDOM(id, title, author, description, comments);
    });
}

function saveBlogs() {
    const blogs = [];
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach((item) => {
        const blogId = item.id;
        const title = item.querySelector(".accordion-button").textContent.split(" - ")[0];
        const author = item.querySelector(".accordion-button small").textContent.replace("by ", "");
        const description = item.querySelector(".accordion-body p").textContent;

        const comments = [];
        const commentItems = item.querySelectorAll(".list-group-item");
        commentItems.forEach((commentItem) => {
            comments.push(commentItem.textContent.replace("Delete", "").trim());
        });

        blogs.push({ id: blogId, title, author, description, comments });
    });

    localStorage.setItem("blogs", JSON.stringify(blogs));
}

function addBlogToDOM(blogId, title, author, description, comments = []) {
    const newBlog = `
        <div class="accordion-item" id="${blogId}">
            <h2 class="accordion-header" id="heading-${blogId}">
                <button 
                    class="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapse-${blogId}" 
                    aria-expanded="false" 
                    aria-controls="collapse-${blogId}">
                    ${title} - <small class="text-muted">by ${author}</small>
                </button>
            </h2>
            <div 
                id="collapse-${blogId}" 
                class="accordion-collapse collapse" 
                aria-labelledby="heading-${blogId}" 
                data-bs-parent="#blogsAccordion">
                <div class="accordion-body">
                    <p>${description}</p>
                    <h5>Comments</h5>
                    <ul id="comments-${blogId}" class="list-group mb-3">
                        ${comments.map((comment) => `
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                ${comment}
                                <button class="btn btn-sm btn-danger" onclick="deleteComment('${comment}')">Delete</button>
                            </li>
                        `).join("")}
                    </ul>
                    <form onsubmit="addComment(event, '${blogId}')">
                        <div class="input-group">
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Add a comment" 
                                id="commentInput-${blogId}" 
                                required>
                            <button class="btn btn-outline-secondary" type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;

    blogsAccordion.insertAdjacentHTML("beforeend", newBlog);
}

blogForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const description = document.getElementById("description").value;

    const blogId = `blog-${Date.now()}`;

    addBlogToDOM(blogId, title, author, description);

    saveBlogs();

    blogForm.reset();
});

function addComment(event, blogId) {
    event.preventDefault();

    const commentInput = document.getElementById(`commentInput-${blogId}`);
    const commentText = commentInput.value;

    const commentsList = document.getElementById(`comments-${blogId}`);
    const commentItem = document.createElement("li");
    commentItem.className =
        "list-group-item d-flex justify-content-between align-items-center";
    commentItem.innerHTML = `
        ${commentText}
        <button class="btn btn-sm btn-danger" onclick="deleteComment('${commentText}')">Delete</button>
    `;

    commentsList.appendChild(commentItem);

    commentInput.value = "";

    saveBlogs();
}

function deleteComment(commentText) {
    const commentsList = document.querySelectorAll(".list-group-item");
    commentsList.forEach((item) => {
        if (item.textContent.includes(commentText)) {
            item.remove();
        }
    });

    saveBlogs();
}

loadBlogs();