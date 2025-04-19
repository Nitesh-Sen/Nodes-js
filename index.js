const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Sample data
const products = [
  {
    id: 1,
    name: "iPhone 14",
    price: 799,
    category: "Mobile",
    inStock: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 749,
    category: "Mobile",
    inStock: false
  },
  {
    id: 3,
    name: "MacBook Pro",
    price: 1999,
    category: "Laptop",
    inStock: true
  }
];

// Default route
app.get('/', (req, res) => {
  res.send('Hello, Abhishek! This is your Node.js app!');
});

// New route: /product
app.get('/product', (req, res) => {
  res.json(products); // sends product list as JSON
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
