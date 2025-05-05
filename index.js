const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Default route with styled HTML
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Welcome Page</title>
        <style>
          body {
            background-color: #f4f4f4;
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 100px;
          }
          h1 {
            color: #4CAF50;
            font-size: 48px;
          }
          p {
            color: #555;
            font-size: 20px;
          }
        </style>
      </head>
      <body>
        <h1>Hello, Nitesh!</h1>
        <p>Code has been successfully updated and is running smoothly. And this comming is for checking end to end automation of pipeline</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
