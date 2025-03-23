// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Create 'uploads' directory if it doesn't exist
// const uploadDir = 'uploads/';
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// // Multer File Storage Configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir); // Save uploaded files to 'uploads' folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filenames
//   },
// });

// const upload = multer({ storage: storage });

// // Nodemailer Transporter Setup (Use your own email credentials here)
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'umarakhtarqq389@gmail.com',  // Your email address
//     pass: 'ltnj szut ujxi xctl',  // Your email password or app password
//     // user: 'psfschoolwebsite@gmail.com',  // Your email address
//     // pass: 'lpwr cbnu hvct wols', 
//   },
// });

// // Route to handle form submission
// app.post('/contact', upload.single('file'), (req, res) => {
//   const { name, email, message } = req.body;
//   const file = req.file;

//   // Debugging: Log the uploaded file to ensure it’s being received
//   console.log('Uploaded file:', file);

//   if (!file) {
//     console.log('No file uploaded');
//   }

//   // Set up email content
//   const mailOptions = {
//     // from: 'PSF Website"<umarakhtarqq389@gmail.com>"',  // Replace with your email
//     // to: 'psfschoolweb@gmail.com',  // Replace with your email
//     from: 'umarakhtarqq389@gmail.com',
//     to: 'akhtarumar11223@gmail.com',
//     subject: 'New Contact Form Submission',
//     html: `
//       <h3>Contact Form Details</h3>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Message:</strong> ${message}</p>
//     `,
//     attachments: file ? [{
//         filename: file.originalname,
//         path: path.join(__dirname, uploadDir, file.filename), // Path to the uploaded file
//         cid: file.filename, // CID so the file can be embedded
//       }] : [],
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error sending email:', error);
//       return res.status(500).send('Error sending email');
//     }
//     console.log('Email sent:', info.response);
//     res.status(200).send('Email sent successfully!');
//   });
// });

// // Serve static files (files uploaded in 'uploads' folder)
// app.use('/uploads', express.static(path.join(__dirname, uploadDir)));

// app.listen(5000, () => {
//   console.log('Server running at http://localhost:5000');
// });


