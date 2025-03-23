// // const express = require('express');
// // const cors = require('cors');
// // const nodemailer = require('nodemailer');
// // const multer = require('multer');
// // const path = require('path');
// // const fs = require('fs');

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // Create 'uploads' directory if it doesn't exist
// // const uploadDir = 'uploads/';
// // if (!fs.existsSync(uploadDir)) {
// //   fs.mkdirSync(uploadDir);
// // }

// // // Multer File Storage Configuration
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, uploadDir); // Save uploaded files to 'uploads' folder
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filenames
// //   },
// // });

// // const upload = multer({ storage: storage });

// // // Nodemailer Transporter Setup (Use your own email credentials here)
// // const transporter = nodemailer.createTransport({
// //   service: 'gmail',
// //   auth: {
// //     user: 'umarakhtarqq389@gmail.com',  // Your email address
// //     pass: 'ltnj szut ujxi xctl',    // Replace with your app password or regular password
// //   },
// // });

// // // Route to handle detailed student application form submission
// // app.post('/apply', upload.single('file'), (req, res) => {
// //   const { name, fatherName, dob, address, phone, email, message } = req.body;
// //   const file = req.file;

// //   // Debugging: Log the uploaded file to ensure it’s being received
// //   console.log('Uploaded file:', file);

// //   if (!file) {
// //     console.log('No file uploaded');
// //   }

// //   // Set up email content
// //   const mailOptions = {
// //     from: 'akhtarumar11223@gmail.com',  // Replace with your email
// //     to: 'akhtarumar11223@gmail.com',  // Replace with your email/ Replace with your email address to receive the application
// //     subject: 'New Student Application Submission',
// //     html: `
// //       <h3>Student Application Details</h3>
// //       <p><strong>Name:</strong> ${name}</p>
// //       <p><strong>Father's Name:</strong> ${fatherName}</p>
// //       <p><strong>Date of Birth:</strong> ${dob}</p>
// //       <p><strong>Address:</strong> ${address}</p>
// //       <p><strong>Phone Number:</strong> ${phone}</p>
// //       <p><strong>Email:</strong> ${email}</p>
// //       <p><strong>Message:</strong> ${message}</p>
// //     `,
// //     attachments: file ? [{
// //         filename: file.originalname,
// //         path: path.join(__dirname, uploadDir, file.filename), // Path to the uploaded file
// //         cid: file.filename, // CID so the file can be embedded
// //       }] : [],
// //   };

// //   // Send the email
// //   transporter.sendMail(mailOptions, (error, info) => {
// //     if (error) {
// //       console.log('Error sending email:', error);
// //       return res.status(500).send('Error sending email');
// //     }
// //     console.log('Email sent:', info.response);
// //     res.status(200).send('Application submitted successfully!');
// //   });
// // });

// // // Serve static files (files uploaded in 'uploads' folder)
// // app.use('/uploads', express.static(path.join(__dirname, uploadDir)));

// // // Start the server
// // app.listen(5000, () => {
// //   console.log('Server running at http://localhost:5000');
// // });






// // const express = require('express');
// // const cors = require('cors');
// // const nodemailer = require('nodemailer');
// // const multer = require('multer');
// // const path = require('path');
// // const fs = require('fs');

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // Create 'uploads' directory if it doesn't exist
// // const uploadDir = 'uploads/';
// // if (!fs.existsSync(uploadDir)) {
// //   fs.mkdirSync(uploadDir);
// // }

// // // Multer File Storage Configuration
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, uploadDir); // Save uploaded files to 'uploads' folder
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filenames
// //   },
// // });

// // const upload = multer({ storage: storage });

// // // Nodemailer Transporter Setup (Use your own email credentials here)
// // const transporter = nodemailer.createTransport({
// //   service: 'gmail',
// //   auth: {
// //     user: 'umarakhtarqq389@gmail.com',  // Your email address
// //     pass: 'ltnj szut ujxi xctl',    // Replace with your app password or regular password
// //   },
// // });

// // // Route to handle detailed student application form submission
// // app.post('/apply', upload.single('file'), (req, res) => {
// //   const { fullName, email, phone, address, qualification, specialization } = req.body;
// //   const file = req.file;

// //   // Debugging: Log the uploaded file to ensure it’s being received
// //   console.log('Uploaded file:', file);

// //   if (!file) {
// //     console.log('No file uploaded');
// //   }

// //   // Set up email content
// //   const mailOptions = {
// //     from: 'akhtarumar11223@gmail.com',  // Replace with your email
// //     to: 'akhtarumar11223@gmail.com',  // Replace with your email/ Replace with your email address to receive the application
// //     subject: 'New Student Application Submission',
// //     html: `
// //       <h3>Student Application Details</h3>
// //       <p><strong>Full Name:</strong> ${fullName}</p>
// //       <p><strong>Email:</strong> ${email}</p>
// //       <p><strong>Phone Number:</strong> ${phone}</p>
// //       <p><strong>Address:</strong> ${address}</p>
// //       <p><strong>Highest Qualification:</strong> ${qualification}</p>
// //       <p><strong>Subject Specialization:</strong> ${specialization}</p>
// //     `,
// //     attachments: file ? [{
// //         filename: file.originalname,
// //         path: path.join(__dirname, uploadDir, file.filename), // Path to the uploaded file
// //         cid: file.filename, // CID so the file can be embedded
// //       }] : [],
// //   };

// //   // Send the email
// //   transporter.sendMail(mailOptions, (error, info) => {
// //     if (error) {
// //       console.log('Error sending email:', error);
// //       return res.status(500).send('Error sending email');
// //     }
// //     console.log('Email sent:', info.response);
// //     res.status(200).send('Application submitted successfully!');
// //   });
// // });

// // // Serve static files (files uploaded in 'uploads' folder)
// // app.use('/uploads', express.static(path.join(__dirname, uploadDir)));

// // // Start the server
// // app.listen(5000, () => {
// //   console.log('Server running at http://localhost:5000');
// // });


// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Ensure 'uploads' directory exists
// const uploadDir = 'uploads/';
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// // Multer storage configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// // Nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'umarakhtarqq389@gmail.com', 
//     pass: 'ltnj szut ujxi xctl', 
//   },
// });

// // Job Application Route
// app.post('/apply', upload.single('file'), (req, res) => {
//   const { name, email, phone, address, qualification, specialization } = req.body;
//   const file = req.file;

//   // Validate Required Fields
//   if (!name || !email || !phone || !address || !qualification || !specialization) {
//     return res.status(400).json({ error: 'All fields except CV are required' });
//   }

//   // Email Content
//   const mailOptions = {
//     from: 'akhtarumar11223@gmail.com',
//     to: 'akhtarumar11223@gmail.com',
//     subject: 'New Student Application',
//     html: `
//       <h3>Student Application Details</h3>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone Number:</strong> ${phone}</p>
//       <p><strong>Address:</strong> ${address}</p>
//       <p><strong>Highest Qualification:</strong> ${qualification}</p>
//       <p><strong>Subject Specialization:</strong> ${specialization}</p>
//     `,
//     attachments: file
//       ? [
//           {
//             filename: file.originalname,
//             path: path.join(__dirname, uploadDir, file.filename),
//           },
//         ]
//       : [],
//   };

//   // Send Email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       return res.status(500).send('Error sending email');
//     }
//     console.log('Email sent:', info.response);
//     res.status(200).send('Application submitted successfully!');
//   });
// });

// // Serve uploaded files
// app.use('/uploads', express.static(path.join(__dirname, uploadDir)));

// // Start Server
// app.listen(5000, () => {
//   console.log('Server running at http://localhost:5000');
// });
