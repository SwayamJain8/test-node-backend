const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Basic health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', message: 'Server is healthy' });
});

// Simple ping-pong route
app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong' });
});

// Detailed status route
app.get('/status', (req, res) => {
    const uptime = process.uptime();
    res.status(200).json({
        status: 'UP',
        uptime: uptime + ' seconds',
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
