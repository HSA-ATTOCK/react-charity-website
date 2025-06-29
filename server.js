const express = require("express");
const path = require("path");
const app = express();

// Add CSP headers
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self'"
  );
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, "build")));

// Handle React routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
