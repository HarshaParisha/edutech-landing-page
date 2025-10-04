const express = require('express');
const router = express.Router();
const leaderboardData = require('../data/leaderboard.json');

router.get('/', (req, res) => {
  res.json(leaderboardData);
});

module.exports = router;
