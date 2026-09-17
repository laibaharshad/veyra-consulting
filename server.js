const express = require("express"); //Importing Express
const path = require("path");

const app = express(); //creates Express application.
const PORT = 3000;


// Allow Express to read JSON sent from the frontend/understand or parse JSON request bodies.
app.use(express.json());


// Serve the frontend files from the public folder as the website
app.use(express.static(path.join(__dirname, "public")));


// Contact form API
app.post("/api/contact", (req, res) => { //"When somebody sends a POST request to /api/contact, run this function."

    const { name, email, service, message } = req.body;

    // Server-side validation
    if (!name || !email || !service || !message) {
        return res.status(400).json({
            success: false,
            message: "Please complete all fields."
        });
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailPattern.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Please enter a valid email address."
        });
    }

    // Mock submission handler
    console.log("New enquiry received:");
    console.log({
        name,
        email,
        service,
        message
    });

    // Send a successful response to the frontend
    res.status(200).json({
        success: true,
        message: "Thank you. Your enquiry has been received."
    });
});


app.listen(PORT, () => {
    console.log(`Veyra server running at http://localhost:${PORT}`);
});

// app.use()
// Tells Express:
// "Use this functionality for incoming requests."

// express.static()
// Tells Express:
// "Serve files from a folder."

// path.join(__dirname, "public")
// Tells Node:
// "Find the public folder inside this project."

// __dirname means the directory where server.js is located.



// app.listen(PORT)
// Tells Express:
// "Start the server and listen for browser requests on port 3000."

// () => { ... }
// This is an arrow function.
// It contains code that should run after the server successfully starts.

// The ${PORT} part automatically inserts the value of:
// const PORT = 3000;