document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const response = await axios.post("http://localhost:5000/user/signUp", data, {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response.status === 201) {
                alert("Sign-up successful!");
                form.reset();
            } else {
                alert("Sign-up failed. Please try again.");
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                alert("User already exists!");
            } else {
                console.error("Error during sign-up:", error);
                alert("An error occurred. Please try again.");
            }
        }
    });
});