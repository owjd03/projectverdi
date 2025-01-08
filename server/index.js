const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Initialize Express app
const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Allow requests from your frontend (port 5173)
app.use(bodyParser.json()); // Parse JSON data from incoming requests

// Import routes
const submitRoutes = require('./routes/submitContact'); // Load routes from 'server/routes'
const chatGPTRoutes = require('./routes/chatGPT.js'); // Import ChatGPT routes

app.use('/api', submitRoutes); // Prefix API routes with '/api'
app.use('/api/chatgpt', chatGPTRoutes); // Prefix ChatGPT routes with '/api/chatgpt'

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});