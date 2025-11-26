const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// --- MIDDLEWARE ---
// Allows the server to understand JSON data sent from the game
app.use(cors());
app.use(bodyParser.json());

// --- SERVE GAME FILES ---
// This tells the server to look in the 'public' folder for index.html
app.use(express.static(path.join(__dirname, 'public')));

// --- LEADERBOARD DATA (In-Memory) ---
// This data resets if the server restarts.
let leaderboard = [
    { name: "NEON", score: 5000, wave: 10 },
    { name: "VOID", score: 3000, wave: 8 },
    { name: "FLUX", score: 1000, wave: 4 }
];

// --- API ROUTES ---

// 1. GET: Fetch the top scores
app.get('/api/leaderboard', (req, res) => {
    // Sort by score (High to Low) and take the top 10
    const topScores = leaderboard
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
    res.json(topScores);
});

// 2. POST: Submit a new score
app.post('/api/score', (req, res) => {
    const { name, score, wave } = req.body;

    // Basic check to ensure data is valid
    if (!name || score === undefined) {
        return res.status(400).json({ error: "Invalid data" });
    }

    // Save the score
    leaderboard.push({ 
        name: name.substring(0, 10), // Limit name to 10 characters
        score: parseInt(score), 
        wave: parseInt(wave) 
    });

    // Sort and return the updated leaderboard
    const topScores = leaderboard
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

    console.log(`>> SCORE RECEIVED: ${name} - ${score}`);
    res.json(topScores);
});

// --- START SERVER ---
app.listen(PORT, () => {
    console.log(`>> SYSTEM ONLINE: Server running on port ${PORT}`);
    console.log(`>> GAME URL: http://localhost:${PORT}`);
});
