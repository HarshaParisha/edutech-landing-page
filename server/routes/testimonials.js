const express = require('express');
const router = express.Router();
const testimonialsData = require('../data/testimonials.json');

router.get('/', (req, res) => {
  res.json(testimonialsData);
});

module.exports = router;
