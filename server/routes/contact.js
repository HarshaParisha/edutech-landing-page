const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message, phone, subject } = req.body;
  
  // Log contact form submission
  console.log('📧 New Contact Form Submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject || 'N/A');
  console.log('Phone:', phone || 'N/A');
  console.log('Message:', message);
  console.log('-----------------------------------');
  
  // Simulate successful submission
  res.json({ 
    success: true, 
    message: 'Thank you for contacting us! We will get back to you soon.' 
  });
});

module.exports = router;
