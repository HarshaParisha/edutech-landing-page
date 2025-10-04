const express = require('express');
const router = express.Router();
const blogsData = require('../data/blogs.json');

router.get('/', (req, res) => {
  res.json(blogsData);
});

router.get('/:id', (req, res) => {
  const blog = blogsData.find(b => b.id === parseInt(req.params.id));
  
  if (!blog) {
    return res.status(404).json({ message: 'Blog not found' });
  }
  
  res.json(blog);
});

module.exports = router;
