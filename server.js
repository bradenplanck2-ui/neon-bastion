const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// *** THE FIX IS HERE ***
// Render provides a port in the environment variables.
// We must use 'process.env.PORT' for it to work online.
const PORT = process.env.PORT || 3000;

// --- MIDDLEWARE ---
app.use(cors());
app.use(bodyParser.json());

// --- SERVE GAME FILES ---
// This points to the 'public' folder where index.html lives
app.use(express.static(path.join(__dirname, 'public')));

// --- LEADERBOARD DATA (In-Memory) ---
let leaderboard = [
    { name: "NEON", score: 5000, wave: 10 },
    { name: "VOID", score: 3000, wave: 8 },
    { name: "FLUX", score: 1000, wave: 4 }
];

// --- API ROUTES ---

// 1. GET: Fetch the top scores
app.get('/api/leaderboard', (req, res) => {
    const topScores = leaderboard
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
    res.json(topScores);
});

// 2. POST: Submit a new score
app.post('/api/score', (req, res) => {
    const { name, score, wave } = req.body;

    if (!name || score === undefined) {
        return res.status(400).json({ error: "Invalid data" });
    }

    leaderboard.push({ 
        name: name.substring(0, 10), 
        score: parseInt(score), 
        wave: parseInt(wave) 
    });

    const topScores = leaderboard
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

    console.log(`>> SCORE RECEIVED: ${name} - ${score}`);
    res.json(topScores);
});

// --- START SERVER ---
app.listen(PORT, () => {
    console.log(`>> SYSTEM ONLINE: Server running on port ${PORT}`);
});
