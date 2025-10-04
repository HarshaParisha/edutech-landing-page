const express = require('express');
const router = express.Router();
const quizzesData = require('../data/quizzes.json');

router.get('/', (req, res) => {
  res.json(quizzesData);
});

router.get('/:id', (req, res) => {
  const quiz = quizzesData.find(q => q.id === parseInt(req.params.id));
  
  if (!quiz) {
    return res.status(404).json({ message: 'Quiz not found' });
  }
  
  res.json(quiz);
});

module.exports = router;
