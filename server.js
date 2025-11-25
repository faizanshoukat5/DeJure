const express = require('express');
const path = require('path');

const app = express();

// Use the PORT provided by cPanel (or default to 3000 for local testing)
const PORT = process.env.PORT || 3000;
const BUILD_DIR = path.join(__dirname, 'client', 'build');

// Serve static files from the React build directory
app.use(express.static(BUILD_DIR, { maxAge: '1d' }));

// For client-side routing, serve index.html for any unknown route
app.get('*', (req, res) => {
  res.sendFile(path.join(BUILD_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} (NODE_ENV=${process.env.NODE_ENV})`);
});
