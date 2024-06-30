const express = require("express");
const router = express.Router();
const API_KEY = process.env.API_KEY;
const convertapi = require('convertapi')(API_KEY);


// Define route handler for file upload and conversion
router.post('/', async (req, res) => {
  try {
    // Convert the uploaded file to PDF using ConvertAPI
    console.log(req.body);
    
    const result = await convertapi.convert('pdf', { File: req.file.path });

    // Get the converted file URL
    const convertedFileUrl = result.file.url;

    // Send the converted file URL back to the frontend
    res.send({ url: convertedFileUrl });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
