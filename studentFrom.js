



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

// // // Multer Storage Configuration
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, uploadDir);
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, Date.now() + path.extname(file.originalname));
// //   },
// // });

// // const upload = multer({
// //   storage: storage,
// //   limits: {
// //     files: 5, // Limit qualification files to 5
// //   },
// // });

// // // Nodemailer Transporter Setup
// // const transporter = nodemailer.createTransport({
// //   service: 'gmail',
// //   auth: {
// //     user: 'umarakhtarqq389@gmail.com',
// //     pass: 'ltnj szut ujxi xctl',
// //   },
// // });

// // // Route to handle study application form submission
// // app.post('/study-apply', upload.fields([
// //   { name: 'profilePic', maxCount: 1 },
// //   { name: 'qualificationFiles', maxCount: 5 }
// // ]), (req, res) => {
// //   const { firstName, lastName, dob, gender, fatherName, email, phone, address, postalCode, city, qualification } = req.body;
// //   const profilePic = req.files['profilePic'] ? req.files['profilePic'][0] : null;
// //   const qualificationFiles = req.files['qualificationFiles'] || [];

// //   // Ensure max 5 files
// //   if (qualificationFiles.length > 5) {
// //     return res.status(400).json({ message: 'You can upload a maximum of 5 qualification files.' });
// //   }

// //   // Validate required fields
// //   if (!firstName || !lastName || !email || !phone) {
// //     return res.status(400).json({ message: 'Missing required fields' });
// //   }

// //   // Prepare email attachments
// //   const attachments = [];

// // if (profilePic) {
// //   attachments.push({
// //     filename: profilePic.originalname,
// //     path: path.resolve(uploadDir, profilePic.filename),
// //   });
// // }

// // qualificationFiles.forEach(file => {
// //   attachments.push({
// //     filename: file.originalname,
// //     path: path.resolve(uploadDir, file.filename),
// //   });
// // });


// //   const mailOptions = {
// //     from: 'akhtarumar11223@gmail.com',
// //     to: 'akhtarumar11223@gmail.com',
// //     subject: 'New Study Application Submission',
// //     html: `
// //       <h3>Student Application Details</h3>
// //       <p><strong>First Name:</strong> ${firstName}</p>
// //       <p><strong>Last Name:</strong> ${lastName}</p>
// //       <p><strong>Date of Birth:</strong> ${dob}</p>
// //       <p><strong>Gender:</strong> ${gender}</p>
// //       <p><strong>Father's Name:</strong> ${fatherName}</p>
// //       <p><strong>Email:</strong> ${email}</p>
// //       <p><strong>Phone:</strong> ${phone}</p>
// //       <p><strong>Address:</strong> ${address}</p>
// //       <p><strong>Postal Code:</strong> ${postalCode}</p>
// //       <p><strong>City:</strong> ${city}</p>
// //       <p><strong>Highest Qualification:</strong> ${qualification}</p>
// //     `,
// //     attachments: attachments,
// //   };

// //   // Send the email
// //   transporter.sendMail(mailOptions, (error, info) => {
// //     if (error) {
// //       console.log('Error sending email:', error);
// //       return res.status(500).json({ message: 'Error submitting application' });
// //     }
// //     console.log('Email sent:', info.response);
// //     res.status(200).json({ message: 'Application submitted successfully!' });
// //   });
// // });

// // // Serve static files
// // app.use('/uploads', express.static(path.join(__dirname, uploadDir)));

// // // Start the server
// // const PORT = 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server running at http://localhost:${PORT}`);
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

// // Create 'uploads' directory if it doesn't exist
// const uploadDir = 'uploads/';
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// // Multer Storage Configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({
//   storage: storage,
//   limits: {
//     files: 5, // Limit qualification files to 5
//   },
// });

// // Nodemailer Transporter Setup
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'umarakhtarqq389@gmail.com',
//     pass: 'ltnj szut ujxi xctl',
//   },
// });

// // Route to handle study application form submission
// app.post(
//   '/study-apply',
//   upload.fields([
//     { name: 'profilePic', maxCount: 1 },
//     { name: 'qualificationFiles', maxCount: 5 },
//   ]),
//   async (req, res) => {
//     try {
//       const { firstName, lastName, dob, gender, fatherName, email, phone, address, postalCode, city, qualification } =
//         req.body;
//       const profilePic = req.files['profilePic'] ? req.files['profilePic'][0] : null;
//       const qualificationFiles = req.files['qualificationFiles'] || [];

//       if (!firstName || !lastName || !email || !phone) {
//         return res.status(400).json({ message: 'Missing required fields' });
//       }

//       // Send a quick response to the client
//       res.status(200).json({ message: 'Application submitted successfully! We will contact you soon.' });

//       // Prepare email attachments
//       const attachments = [];
//       if (profilePic) {
//         attachments.push({
//           filename: profilePic.originalname,
//           path: path.resolve(uploadDir, profilePic.filename),
//         });
//       }
//       qualificationFiles.forEach((file) => {
//         attachments.push({
//           filename: file.originalname,
//           path: path.resolve(uploadDir, file.filename),
//         });
//       });

//       // Email details
//       const mailOptions = {
//         from: 'akhtarumar11223@gmail.com',
//         to: 'akhtarumar11223@gmail.com',
//         subject: 'New Study Application Submission',
//         html: `
//           <h3>Student Application Details</h3>
//           <p><strong>First Name:</strong> ${firstName}</p>
//           <p><strong>Last Name:</strong> ${lastName}</p>
//           <p><strong>Date of Birth:</strong> ${dob}</p>
//           <p><strong>Gender:</strong> ${gender}</p>
//           <p><strong>Father's Name:</strong> ${fatherName}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone:</strong> ${phone}</p>
//           <p><strong>Address:</strong> ${address}</p>
//           <p><strong>Postal Code:</strong> ${postalCode}</p>
//           <p><strong>City:</strong> ${city}</p>
//           <p><strong>Highest Qualification:</strong> ${qualification}</p>
//         `,
//         attachments: attachments,
//       };

//       // Send email in background (not delaying response)
//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.log('Error sending email:', error);
//         } else {
//           console.log('Email sent:', info.response);
//         }
//       });
//     } catch (error) {
//       console.error('Server error:', error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }
// );

// // Serve static files
// app.use('/uploads', express.static(path.join(__dirname, uploadDir)));

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
