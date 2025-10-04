const express = require('express');
const router = express.Router();
const coursesData = require('../data/courses.json');

router.get('/', (req, res) => {
  const { category } = req.query;
  
  if (category && category !== 'All') {
    const filtered = coursesData.filter(course => course.category === category);
    return res.json(filtered);
  }
  
  res.json(coursesData);
});

router.get('/:id', (req, res) => {
  const course = coursesData.find(c => c.id === parseInt(req.params.id));
  
  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }
  
  res.json(course);
});

module.exports = router;
