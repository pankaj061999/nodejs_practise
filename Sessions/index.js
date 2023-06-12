var express = require("express");
var cookieParser = require("cookie-parser");
var session = require("express-session");

const app = express();

// Use cookie-parser middleware to parse cookies
app.use(cookieParser());

// Use session middleware with default MemoryStore (not recommended for production)
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Custom middleware to count views for each client
app.use((req, res, next) => {
  // Check if the session has a view counter, initialize it to 1 if not present
  req.session.views = req.session.views ? req.session.views + 1 : 1;

  console.log("Client view count:", req.session);

  next();
});

// Route handler for the home page
app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// console.log("sessions", session, cookieParser);
