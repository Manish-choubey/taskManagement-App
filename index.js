const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');

// Initialize the app
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to Database
connectToDatabase();

// Routes
app.use('/api', taskRoutes);

// Error Handling for Invalid Routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
