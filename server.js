const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// API route for products
app.get('/api/products', (req, res) => {
  const productsPath = path.join(__dirname, 'public', 'products.json');
  fs.readFile(productsPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to load products' });
    }
    res.json(JSON.parse(data));
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
