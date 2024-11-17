const blogForm = document.getElementById("blogForm");
const blogsAccordion = document.getElementById("blogsAccordion");

axios.defaults.baseURL = "/api/blogs";

async function loadBlogs() {
  blogsAccordion.innerHTML = "";

  try {
    const response = await axios.get("/");
    const blogs = response.data;

    blogs.forEach(({ id, title, author, description, Comments }) => {
      addBlogToDOM(id, title, author, description, Comments);
    });
  } catch (error) {
    console.error("Error loading blogs:", error);
  }
}

async function saveBlog(blog) {
  try {
    await axios.post("/", blog);
    loadBlogs();
  } catch (error) {
    console.error("Error saving blog:", error);
  }
}

async function addComment(event, blogId) {
  event.preventDefault();

  const commentInput = document.getElementById(`commentInput-${blogId}`);
  const content = commentInput.value;

  try {
    await axios.post(`/${blogId}/comments`, { content });
    commentInput.value = "";
    loadBlogs();
  } catch (error) {
    console.error("Error adding comment:", error);
  }
}

async function deleteComment(commentId) {
  try {
    await axios.delete(`/comments/${commentId}`);
    loadBlogs();
  } catch (error) {
    console.error("Error deleting comment:", error);
  }
}

function addBlogToDOM(blogId, title, author, description, comments = []) {
  const newBlog = `
    <div class="accordion-item" id="blog-${blogId}">
      <h2 class="accordion-header" id="heading-${blogId}">
          <button
              class="accordion-button collapsed bg-success text-white"
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
          class="accordion-collapse collapse bg-warning text-dark"
          aria-labelledby="heading-${blogId}"
          data-bs-parent="#blogsAccordion">
          <div class="accordion-body">
              <p>${description}</p>
              <h5>Comments</h5>
              <ul id="comments-${blogId}" class="list-group mb-3">
                  ${comments.map((comment) => `
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                          ${comment.content}
                          <button class="btn btn-sm btn-danger" onclick="deleteComment(${comment.id})">Delete</button>
                      </li>`).join("")}
              </ul>
              <form onsubmit="addComment(event, '${blogId}')">
                  <div class="input-group">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="Add a comment"
                          id="commentInput-${blogId}"
                          required>
                      <button class="btn btn-outline-secondary bg-info text-white" type="submit">Add</button>
                  </div>
              </form>
          </div>
      </div>
    </div>`;

  blogsAccordion.insertAdjacentHTML("beforeend", newBlog);
}

blogForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const description = document.getElementById("description").value;

  const blog = { title, author, description };
  await saveBlog(blog);

  blogForm.reset();
});

loadBlogs();