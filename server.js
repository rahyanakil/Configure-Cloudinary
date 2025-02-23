const express = require('express');
const multer = require('multer'); // Middleware for handling file uploads
const cloudinary = require('./cloudinaryConfig'); // Import the Cloudinary config
require('dotenv').config();

const app = express();
const upload = multer({ dest: 'uploads/' }); // Temporary storage before uploading to Cloudinary

// API endpoint to upload an image
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'my_uploads', // Optional: Specify a folder in Cloudinary
    });

    res.json({ message: 'Upload successful', url: result.secure_url });
  } catch (error) {
    res.status(500).json({ message: 'Upload failed', error });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
