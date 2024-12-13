const express = require('express');
const path = require('path');
const app = express();

// Middleware for logging requests
app.use((req, res, next) => {
  console.(`${req.method} request for '${req.url}'`);
  next();
});

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Express Web Demo</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background: #f4f4f9; }
        header { background: #6200ea; color: white; padding: 1rem; text-align: center; }
        main { padding: 2rem; }
        footer { background: #6200ea; color: white; text-align: center; padding: 1rem; position: fixed; bottom: 0; width: 100%; }
        nav a { color: white; text-decoration: none; margin: 0 1rem; }
      </style>
    </head>
    <body>
      <header>
        <h1>Welcome to the Express Web Demo</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main>
        <h2>Home Page</h2>
        <p>This is the home page of the Express web application. Use the navigation menu to explore other pages!!</p>
      </main>
      <footer>
        <p>&copy; 2024 Express Demo</p>
      </footer>
    </body>
    </html>
  `);
});

// About route
app.get('/about', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>About Us</title>
    </head>
    <body>
      <header>
        <h1>About Us</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main>
        <p>We are building a simple Express application to demonstrate its capabilities!</p>
      </main>
    </body>
    </html>
  `);
});

// Contact route
app.get('/contact', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Us</title>
    </head>
    <body>
      <header>
        <h1>Contact Us</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main>
        <form action="/contact" method="post">
          <label for="name">Name:</label><br>
          <input type="text" id="name" name="name" required><br><br>
          <label for="message">Message:</label><br>
          <textarea id="message" name="message" rows="5" required></textarea><br><br>
          <button type="submit">Send</button>
        </form>
      </main>
    </body>
    </html>
  `);
});

// 404 route
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>404 Not Found</title>
    </head>
    <body>
      <header>
        <h1>404 - Page Not Found</h1>
      </header>
      <main>
        <p>Sorry, the page you're looking for doesn't exist. <a href="/">Return to Home</a></p>
      </main>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

module.exports = app;
