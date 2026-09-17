const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    // Frontend validation
    if (!name || !email || !service || !message) {
        formMessage.textContent = "Please complete all fields.";
        return;
    }

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    try { //await basically says: "Wait for the fetch operation to give me its
            //response before continuing this function."
        const response = await fetch("/api/contact", { //fetch() means: "Send an HTTP request." to /ap/contact
            method: "POST", //POST -> "Here is some data."
            headers: {
                "Content-Type": "application/json" //"The data I'm sending is JSON."
            },
            body: JSON.stringify({ //actual data being sent.
                name,
                email,
                service,
                message
            })
        });

        const data = await response.json();
        //takes the server's JSON response and converts it back into a JavaScript object.

        if (!response.ok) {
            formMessage.textContent = data.message;
            return;
        }

        formMessage.textContent = data.message;

        form.reset();

    } catch (error) {

        console.error(error);

        formMessage.textContent =
            "Something went wrong. Please try again.";

    }
});