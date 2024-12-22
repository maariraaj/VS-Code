document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        try {
            const response = await axios.post("/user/signup", data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.status === 201) {
                alert("Account created successfully");
                form.reset();
            } else {
                alert('Signup failed. Please try again.')
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                alert("User already exists, Please Login!");
            } else if (error.response && error.response.status === 400) {
                alert(error.response.data.error);
            } else {
                alert("An error occurred. Please try again.");
            }
        }
    });
});