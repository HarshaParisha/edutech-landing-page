const express = require('express');
const router = express.Router();
const teamData = require('../data/team.json');

router.get('/', (req, res) => {
  res.json(teamData);
});

module.exports = router;
