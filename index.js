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

// // Multer Storage Configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage });

// // Nodemailer Transporter Setup
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     // user: 'psfschoolweb@gmail.com',
//     // pass: 'pbra rhcq fjmk dksk',
//     user: 'psfschoolwebsite@gmail.com',  // Your email address
//     pass: 'lpwr cbnu hvct wols', 
//   },
// });

// /** 
//  * 📌 Route 1: Job Application Form
//  */
// app.post('/apply', upload.single('file'), (req, res) => {
//   const { name, email, phone, address, qualification, specialization } = req.body;
//   const file = req.file;

//   if (!name || !email || !phone || !address || !qualification || !specialization) {
//     return res.status(400).json({ error: 'All fields except CV are required' });
//   }

//   const mailOptions = {
//     from: 'psfschoolweb@gmail.com',  // Replace with your email
//     to: 'psfschoolweb@gmail.com',   // Replace with your email
//     subject: 'Job Application',
//     html: `
//       <h3>Student Application Details</h3>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone Number:</strong> ${phone}</p>
//       <p><strong>Address:</strong> ${address}</p>
//       <p><strong>Highest Qualification:</strong> ${qualification}</p>
//       <p><strong>Subject Specialization:</strong> ${specialization}</p>
//     `,
//     attachments: file ? [{ filename: file.originalname, path: path.join(__dirname, uploadDir, file.filename) }] : [],
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) return res.status(500).send('Error sending email');
//     res.status(200).send('Application submitted successfully!');
//   });
// });

// /** 
//  * 📌 Route 2: Contact Form
//  */
// app.post('/contact', upload.single('file'), (req, res) => {
//   const { name, email, message } = req.body;
//   const file = req.file;

//   const mailOptions = {
//     from: 'psfschoolweb@gmail.com',  // Replace with your email
//     to: 'psfschoolweb@gmail.com',  // Replace with your email
//     subject: 'New Contact Form Submission',
//     html: `
//       <h3>Contact Form Details</h3>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Message:</strong> ${message}</p>
//     `,
//     attachments: file ? [{ filename: file.originalname, path: path.join(__dirname, uploadDir, file.filename) }] : [],
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) return res.status(500).send('Error sending email');
//     res.status(200).send('Email sent successfully!');
//   });
// });

// /** 
//  * 📌 Route 3: Study Application Form
//  */
// app.post(
//   '/study-apply',
//   upload.fields([
//     { name: 'profilePic', maxCount: 1 },
//     { name: 'qualificationFiles', maxCount: 5 },
//   ]),
//   async (req, res) => {
//     try {
//       const { firstName, lastName, dob, gender, fatherName, email, phone, address, postalCode, city, qualification } = req.body;
//       const profilePic = req.files['profilePic'] ? req.files['profilePic'][0] : null;
//       const qualificationFiles = req.files['qualificationFiles'] || [];

//       if (!firstName || !lastName || !email || !phone) {
//         return res.status(400).json({ message: 'Missing required fields' });
//       }

//       res.status(200).json({ message: 'Application submitted successfully! We will contact you soon.' });

//       const attachments = [];
//       if (profilePic) {
//         attachments.push({ filename: profilePic.originalname, path: path.resolve(uploadDir, profilePic.filename) });
//       }
//       qualificationFiles.forEach((file) => {
//         attachments.push({ filename: file.originalname, path: path.resolve(uploadDir, file.filename) });
//       });

//       const mailOptions = {
//         from: 'psfschoolweb@gmail.com',  // Replace with your email
//         to: 'psfschoolweb@gmail.com',  // Replace with your email
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

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) console.log('Error sending email:', error);
//         else console.log('Email sent:', info.response);
//       });
//     } catch (error) {
//       console.error('Server error:', error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }
// );

// // Serve static files
// app.use('/uploads', express.static(path.join(__dirname, uploadDir)));

// // Start Server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const multer = require('multer');
// const path = require('path');
// const { v2: cloudinary } = require('cloudinary');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Cloudinary Configuration
// cloudinary.config({ 
//     cloud_name: 'dxzkemybn', 
//     api_key: '913286582771835', 
//     api_secret: '461hYcLueZtFaDwlNx2gBN8drJg' 
// });

// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: 'uploads',
//         format: async (req, file) => 'png', // Supports dynamic formats
//         public_id: (req, file) => Date.now() + path.extname(file.originalname),
//     },
// });

// const upload = multer({ storage });

// // Nodemailer Transporter Setup
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'psfschoolwebsite@gmail.com',
//         pass: 'lpwr cbnu hvct wols',
//     },
// });

// // 📌 Job Application Route
// app.post('/apply', upload.single('file'), async (req, res) => {
//     const { name, email, phone, address, qualification, specialization } = req.body;
//     const file = req.file;

//     if (!name || !email || !phone || !address || !qualification || !specialization) {
//         return res.status(400).json({ error: 'All fields except CV are required' });
//     }

//     const mailOptions = {
//         from: 'psfschoolweb@gmail.com',
//         to: 'psfschoolweb@gmail.com',
//         subject: 'Job Application',
//         html: `
//           <h3>Student Application Details</h3>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone Number:</strong> ${phone}</p>
//           <p><strong>Address:</strong> ${address}</p>
//           <p><strong>Highest Qualification:</strong> ${qualification}</p>
//           <p><strong>Subject Specialization:</strong> ${specialization}</p>
//         `,
//         attachments: file ? [{ filename: file.originalname, path: file.path }] : [],
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) return res.status(500).send('Error sending email');
//         res.status(200).send('Application submitted successfully!');
//     });
// });

// // 📌 Contact Form Route
// app.post('/contact', upload.single('file'), async (req, res) => {
//     const { name, email, message } = req.body;
//     const file = req.file;

//     const mailOptions = {
//         from: 'psfschoolweb@gmail.com',
//         to: 'psfschoolweb@gmail.com',
//         subject: 'New Contact Form Submission',
//         html: `
//           <h3>Contact Form Details</h3>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Message:</strong> ${message}</p>
//         `,
//         attachments: file ? [{ filename: file.originalname, path: file.path }] : [],
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) return res.status(500).send('Error sending email');
//         res.status(200).send('Email sent successfully!');
//     });
// });

// // 📌 Study Application Route
// app.post(
//     '/study-apply',
//     upload.fields([
//         { name: 'profilePic', maxCount: 1 },
//         { name: 'qualificationFiles', maxCount: 5 },
//     ]),
//     async (req, res) => {
//         try {
//             const { firstName, lastName, dob, gender, fatherName, email, phone, address, postalCode, city, qualification } = req.body;
//             const profilePic = req.files['profilePic'] ? req.files['profilePic'][0] : null;
//             const qualificationFiles = req.files['qualificationFiles'] || [];

//             if (!firstName || !lastName || !email || !phone) {
//                 return res.status(400).json({ message: 'Missing required fields' });
//             }

//             res.status(200).json({ message: 'Application submitted successfully! We will contact you soon.' });

//             const attachments = [];
//             if (profilePic) {
//                 attachments.push({ filename: profilePic.originalname, path: profilePic.path });
//             }
//             qualificationFiles.forEach((file) => {
//                 attachments.push({ filename: file.originalname, path: file.path });
//             });

//             const mailOptions = {
//                 from: 'psfschoolweb@gmail.com',
//                 to: 'psfschoolweb@gmail.com',
//                 subject: 'New Study Application Submission',
//                 html: `
//                   <h3>Student Application Details</h3>
//                   <p><strong>First Name:</strong> ${firstName}</p>
//                   <p><strong>Last Name:</strong> ${lastName}</p>
//                   <p><strong>Date of Birth:</strong> ${dob}</p>
//                   <p><strong>Gender:</strong> ${gender}</p>
//                   <p><strong>Father's Name:</strong> ${fatherName}</p>
//                   <p><strong>Email:</strong> ${email}</p>
//                   <p><strong>Phone:</strong> ${phone}</p>
//                   <p><strong>Address:</strong> ${address}</p>
//                   <p><strong>Postal Code:</strong> ${postalCode}</p>
//                   <p><strong>City:</strong> ${city}</p>
//                   <p><strong>Highest Qualification:</strong> ${qualification}</p>
//                 `,
//                 attachments: attachments,
//             };

//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) console.log('Error sending email:', error);
//                 else console.log('Email sent:', info.response);
//             });
//         } catch (error) {
//             console.error('Server error:', error);
//             res.status(500).json({ message: 'Server error' });
//         }
//     }
// );

// // Start Server
// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });








// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const multer = require('multer');
// const path = require('path');
// const { v2: cloudinary } = require('cloudinary');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Cloudinary Configuration
// cloudinary.config({ 
//     cloud_name: 'dxzkemybn', 
//     api_key: '913286582771835', 
//     api_secret: '461hYcLueZtFaDwlNx2gBN8drJg' 
// });

// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: 'uploads',
//         format: async (req, file) => 'png',
//         public_id: (req, file) => Date.now() + path.extname(file.originalname),
//     },
// });

// const upload = multer({ storage });

// // Nodemailer Transporter Setup
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'psfschoolwebsite@gmail.com',
//         pass: 'lpwr cbnu hvct wols',
//     },
// });

// // Function to send emails
// const sendEmail = (to, subject, html, attachments = []) => {
//     const mailOptions = {
//         from: 'psfschoolweb@gmail.com',
//         to,
//         subject,
//         html,
//         attachments,
//     };
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) console.log('Error sending email:', error);
//         else console.log('Email sent:', info.response);
//     });
// };

// // 📌 Job Application Route
// app.post('/apply', upload.single('file'), async (req, res) => {
//     const { name, email, phone, address, qualification, specialization } = req.body;
//     const file = req.file;

//     if (!name || !email || !phone || !address || !qualification || !specialization) {
//         return res.status(400).json({ error: 'All fields except CV are required' });
//     }

//     const emailBody = `
//       <h3>Student Application Details</h3>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone Number:</strong> ${phone}</p>
//       <p><strong>Address:</strong> ${address}</p>
//       <p><strong>Highest Qualification:</strong> ${qualification}</p>
//       <p><strong>Subject Specialization:</strong> ${specialization}</p>
//     `;

//     sendEmail('psfschoolweb@gmail.com', 'Job Application', emailBody, file ? [{ filename: file.originalname, path: file.path }] : []);
//     res.status(200).send('Application submitted successfully!');
// });

// // 📌 Contact Form Route
// app.post('/contact', upload.single('file'), async (req, res) => {
//     const { name, email, message } = req.body;
//     const file = req.file;

//     const emailBody = `
//       <h3>Contact Form Details</h3>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Message:</strong> ${message}</p>
//     `;

//     sendEmail('psfschoolweb@gmail.com', 'New Contact Form Submission', emailBody, file ? [{ filename: file.originalname, path: file.path }] : []);
//     res.status(200).send('Email sent successfully!');
// });

// // 📌 Study Application Route
// app.post('/study-apply', upload.fields([
//     { name: 'profilePic', maxCount: 1 },
//     { name: 'qualificationFiles', maxCount: 5 },
// ]), async (req, res) => {
//     const { firstName, lastName, dob, gender, fatherName, email, phone, address, postalCode, city, qualification } = req.body;
//     const profilePic = req.files['profilePic'] ? req.files['profilePic'][0] : null;
//     const qualificationFiles = req.files['qualificationFiles'] || [];

//     if (!firstName || !lastName || !email || !phone) {
//         return res.status(400).json({ message: 'Missing required fields' });
//     }

//     res.status(200).json({ message: 'Application submitted successfully! We will contact you soon.' });

//     const attachments = [];
//     if (profilePic) attachments.push({ filename: profilePic.originalname, path: profilePic.path });
//     qualificationFiles.forEach(file => attachments.push({ filename: file.originalname, path: file.path }));

//     const emailBody = `
//       <h3>Student Application Details</h3>
//       <p><strong>First Name:</strong> ${firstName}</p>
//       <p><strong>Last Name:</strong> ${lastName}</p>
//       <p><strong>Date of Birth:</strong> ${dob}</p>
//       <p><strong>Gender:</strong> ${gender}</p>
//       <p><strong>Father's Name:</strong> ${fatherName}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone:</strong> ${phone}</p>
//       <p><strong>Address:</strong> ${address}</p>
//       <p><strong>Postal Code:</strong> ${postalCode}</p>
//       <p><strong>City:</strong> ${city}</p>
//       <p><strong>Highest Qualification:</strong> ${qualification}</p>
//     `;

//     sendEmail('psfschoolweb@gmail.com', 'New Study Application Submission', emailBody, attachments);
// });

// // Start Server
// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });



//new 


// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const multer = require('multer');
// const path = require('path');
// const { v2: cloudinary } = require('cloudinary');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Cloudinary Configuration
// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// // Multer Storage with Dynamic Folder Paths
// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: async (req, file) => {
//         let folderName = 'documents'; // Default folder
//         if (file.fieldname === 'profilePic') folderName = 'profile_pictures';
//         else if (file.fieldname === 'qualificationFiles') folderName = 'qualifications';
//         else if (file.fieldname === 'cv') folderName = 'cvs';

//         return {
//             folder: folderName,
//             format: file.mimetype.split('/')[1], // Extract format from mimetype
//             public_id: Date.now() + path.extname(file.originalname),
//         };
//     },
// });

// const upload = multer({ storage });

// // Nodemailer Transporter Setup
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
// });

// // Function to Send Emails
// const sendEmail = (to, subject, html, attachments = []) => {
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//         to,
//         subject,
//         html,
//         attachments,
//     };
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) console.log('Error sending email:', error);
//         else console.log('Email sent:', info.response);
//     });
// };

// app.post('/apply', upload.fields([
//   { name: 'profilePic', maxCount: 1 },
//   { name: 'qualificationFiles', maxCount: 5 },
//   { name: 'cv', maxCount: 1 }
// ]), async (req, res) => {
//   const { name, email, phone, address, qualification, specialization } = req.body;

//   // Name Validation
//   if (!name || name.length < 3) {
//       return res.status(400).json({ error: 'Name must be at least 3 characters long.' });
//   }

//   // Email Validation
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!email || !emailRegex.test(email)) {
//       return res.status(400).json({ error: 'Invalid email format.' });
//   }

//   // Phone Number Validation (Must be 10 or 11 digits)
//   if (!phone || !/^\d{10,11}$/.test(phone)) {
//       return res.status(400).json({ error: 'Phone number must be 10 or 11 digits.' });
//   }

//   // Address Validation (At least 10 characters)
//   if (!address || address.length < 10) {
//       return res.status(400).json({ error: 'Address must be at least 10 characters long.' });
//   }

//   if (!qualification || !specialization) {
//       return res.status(400).json({ error: 'Qualification and Specialization are required.' });
//   }

//   // Process Files
//   const profilePic = req.files['profilePic'] ? req.files['profilePic'][0] : null;
//   const qualificationFiles = req.files['qualificationFiles'] || [];
//   const cv = req.files['cv'] ? req.files['cv'][0] : null;

//   const attachments = [];
//   if (profilePic) attachments.push({ filename: profilePic.originalname, path: profilePic.path });
//   qualificationFiles.forEach(file => attachments.push({ filename: file.originalname, path: file.path }));
//   if (cv) attachments.push({ filename: cv.originalname, path: cv.path });

//   const emailBody = `
//     <h3>Student Application Details</h3>
//     <p><strong>Name:</strong> ${name}</p>
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Phone Number:</strong> ${phone}</p>
//     <p><strong>Address:</strong> ${address}</p>
//     <p><strong>Highest Qualification:</strong> ${qualification}</p>
//     <p><strong>Subject Specialization:</strong> ${specialization}</p>
//   `;

//   sendEmail('psfschoolweb@gmail.com', 'Job Application', emailBody, attachments);
//   res.status(200).json({ message: 'Application submitted successfully!' });
// });

// // 📌 Contact Form Route
// app.post('/contact', upload.single('file'), async (req, res) => {
//     const { name, email, message } = req.body;
//     const file = req.file;

//     const emailBody = `
//       <h3>Contact Form Details</h3>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Message:</strong> ${message}</p>
//     `;

//     sendEmail('psfschoolweb@gmail.com', 'New Contact Form Submission', emailBody, file ? [{ filename: file.originalname, path: file.path }] : []);
//     res.status(200).send('Email sent successfully!');
// });

// // 📌 Study Application Route// 📌 Study Application Route
// app.post('/study-apply', upload.fields([
//   { name: 'profilePic', maxCount: 1 },
//   { name: 'qualificationFiles', maxCount: 5 },
//   { name: 'cv', maxCount: 1 }
// ]), async (req, res) => {
//   const { firstName, lastName, dob, gender, fatherName, email, phone, address, postalCode, city, state, country, qualification } = req.body;
  
//   // Get uploaded files
//   const profilePic = req.files['profilePic'] ? req.files['profilePic'][0] : null;
//   const qualificationFiles = req.files['qualificationFiles'] || [];
//   const cv = req.files['cv'] ? req.files['cv'][0] : null;

//   // Validation: Required Fields
//   if (!firstName || !lastName || !email || !phone || !profilePic) {
//       return res.status(400).json({ message: 'Missing required fields' });
//   }

//   // Validation: File Types
//   const allowedImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
//   const allowedDocTypes = ['application/pdf', 'image/jpeg', 'image/png'];

//   if (!allowedImageTypes.includes(profilePic.mimetype)) {
//       return res.status(400).json({ message: 'Profile picture must be a valid image (JPG, PNG).' });
//   }

//   for (const file of qualificationFiles) {
//       if (!allowedDocTypes.includes(file.mimetype)) {
//           return res.status(400).json({ message: 'Qualification files must be PDF or images (JPG, PNG).' });
//       }
//   }

//   if (cv && !allowedDocTypes.includes(cv.mimetype)) {
//       return res.status(400).json({ message: 'CV must be a PDF or image file.' });
//   }

//   res.status(200).json({ message: 'Application submitted successfully! We will contact you soon.' });

//   // Email Attachments
//   const attachments = [];
//   if (profilePic) attachments.push({ filename: profilePic.originalname, path: profilePic.path });
//   qualificationFiles.forEach(file => attachments.push({ filename: file.originalname, path: file.path }));
//   if (cv) attachments.push({ filename: cv.originalname, path: cv.path });

//   // Email Content
//   const emailBody = `
//     <h3>Student Application Details</h3>
//     <p><strong>First Name:</strong> ${firstName}</p>
//     <p><strong>Last Name:</strong> ${lastName}</p>
//     <p><strong>Date of Birth:</strong> ${dob}</p>
//     <p><strong>Gender:</strong> ${gender}</p>
//     <p><strong>Father's Name:</strong> ${fatherName}</p>
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Phone:</strong> ${phone}</p>
//     <p><strong>Address:</strong> ${address}</p>
//     <p><strong>Postal Code:</strong> ${postalCode}</p>
//     <p><strong>City:</strong> ${city}</p>
//     <p><strong>State:</strong> ${state}</p>
//     <p><strong>Country:</strong> ${country}</p>
//     <p><strong>Highest Qualification:</strong> ${qualification}</p>
//   `;

//   sendEmail('psfschoolweb@gmail.com', 'New Study Application Submission', emailBody, attachments);
// });
// app.get('/test', (req, res) => {
//   res.json({ message: "Backend is working!" });
// });

// // Start Server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server running at http://localhost:${PORT}`);
// // });


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Server running on port ${PORT}`);
// });





require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const app = express();
app.use(cors());
app.use(express.json());

// Cloudinary Configuration
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Multer Storage with Dynamic Folder Paths
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        let folderName = 'documents'; // Default folder
        if (file.fieldname === 'profilePic') folderName = 'profile_pictures';
        else if (file.fieldname === 'qualificationFiles') folderName = 'qualifications';
        else if (file.fieldname === 'cv') folderName = 'cvs';

        return {
            folder: folderName,
            format: file.mimetype.split('/')[1], // Extract format from mimetype
            public_id: Date.now() + path.extname(file.originalname),
        };
    },
});

const upload = multer({ storage });

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
});

// Enhanced Function to Send Emails with Cloudinary links and previews
const sendEmail = (to, subject, html, fileLinks = []) => {
    // Add file links and previews to the email body
    if (fileLinks.length > 0) {
        html += `<h4>Uploaded Files:</h4><ul style="list-style-type: none; padding: 0;">`;
        
        fileLinks.forEach(link => {
            // Check if file is an image (for preview)
            const isImage = link.url.match(/\.(jpeg|jpg|gif|png)$/) != null;
            
            html += `
            <li style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                <strong>${link.name}</strong><br>
                <a href="${link.url}" target="_blank" style="color: #0066cc;">View/Download File</a><br>`;
            
            if (isImage) {
                // Add image preview (resized to 200px width for email)
                const previewUrl = link.url.replace('/upload/', '/upload/w_200/');
                html += `<img src="${previewUrl}" alt="${link.name}" style="max-width: 200px; margin-top: 10px; border: 1px solid #ddd;"/>`;
            } else {
                // For non-image files, show a file icon
                html += `<div style="margin-top: 10px; color: #666;">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                        <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                </div>`;
            }
            
            html += `</li>`;
        });
        
        html += `</ul>`;
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        html,
        // Attach files if they're small enough (under 1MB)
        attachments: fileLinks
            .filter(link => !link.url.match(/\.(jpeg|jpg|gif|png)$/)) // Only attach non-images
            .map(link => ({
                filename: link.name,
                path: link.url
            }))
            .filter(attach => attach.path.length < 1000000) // Limit to 1MB attachments
            // .filter(attach => attach && attach.path)

    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.log('Error sending email:', error);
        else console.log('Email sent:', info.response);
    });
};

// Routes remain the same as in your previous code
app.post('/apply', upload.fields([
  { name: 'profilePic', maxCount: 1 },
  { name: 'qualificationFiles', maxCount: 5 },
  { name: 'cv', maxCount: 1 }
]), async (req, res) => {
  const { name, email, phone, address, qualification, specialization } = req.body;

  // Validations (same as before)
  if (!name || name.length < 3) return res.status(400).json({ error: 'Name must be at least 3 characters long.' });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) return res.status(400).json({ error: 'Invalid email format.' });
  if (!phone || !/^\d{10,11}$/.test(phone)) return res.status(400).json({ error: 'Phone number must be 10 or 11 digits.' });
  if (!address || address.length < 10) return res.status(400).json({ error: 'Address must be at least 10 characters long.' });
  if (!qualification || !specialization) return res.status(400).json({ error: 'Qualification and Specialization are required.' });

  // Process files and get Cloudinary URLs
  const fileLinks = [];
  
  if (req.files['profilePic']) {
    const file = req.files['profilePic'][0];
    fileLinks.push({
      name: 'Profile Picture: ' + file.originalname,
      url: file.path // Cloudinary URL is already in file.path
    });
  }

  if (req.files['qualificationFiles']) {
    req.files['qualificationFiles'].forEach(file => {
      fileLinks.push({
        name: 'Qualification: ' + file.originalname,
        url: file.path
      });
    });
  }

  if (req.files['cv']) {
    const file = req.files['cv'][0];
    fileLinks.push({
      name: 'CV: ' + file.originalname,
      url: file.path
    });
  }

  const emailBody = `
    <h3 style="color: #333;">Student Application Details</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Highest Qualification:</strong> ${qualification}</p>
    <p><strong>Subject Specialization:</strong> ${specialization}</p>
  `;

  sendEmail('psfschoolweb@gmail.com', 'Job Application', emailBody, fileLinks);
  res.status(200).json({ 
    message: 'Application submitted successfully!',
    fileLinks // Optionally return the links to the client
  });
});

// Updated Contact Form Route
app.post('/contact', upload.single('file'), async (req, res) => {
    const { name, email, message } = req.body;
    const file = req.file;

    const fileLinks = [];
    if (file) {
        fileLinks.push({
            name: file.originalname,
            url: file.path
        });
    }

    const emailBody = `
      <h3 style="color: #333;">Contact Form Details</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    sendEmail('psfschoolweb@gmail.com', 'New Contact Form Submission', emailBody, fileLinks);
    res.status(200).json({ 
      message: 'Email sent successfully!',
      fileUrl: file ? file.path : null
    });
});

// Updated Study Application Route
app.post('/study-apply', upload.fields([
  { name: 'profilePic', maxCount: 1 },
  { name: 'qualificationFiles', maxCount: 5 },
  { name: 'cv', maxCount: 1 }
]), async (req, res) => {
  const { firstName, lastName, dob, gender, fatherName, email, phone, address, postalCode, city, state, country, qualification } = req.body;
  
  // Validations (same as before)
  if (!firstName || !lastName || !email || !phone) {
      return res.status(400).json({ message: 'Missing required fields' });
  }

  // Process files and get Cloudinary URLs
  const fileLinks = [];
  
  if (req.files['profilePic']) {
    const file = req.files['profilePic'][0];
    // Validate file type
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedImageTypes.includes(file.mimetype)) {
      return res.status(400).json({ message: 'Profile picture must be a valid image (JPG, PNG).' });
    }
    fileLinks.push({
      name: 'Profile Picture: ' + file.originalname,
      url: file.path
    });
  }

  if (req.files['qualificationFiles']) {
    const allowedDocTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    for (const file of req.files['qualificationFiles']) {
      if (!allowedDocTypes.includes(file.mimetype)) {
        return res.status(400).json({ message: 'Qualification files must be PDF or images (JPG, PNG).' });
      }
      fileLinks.push({
        name: 'Qualification: ' + file.originalname,
        url: file.path
      });
    }
  }

  if (req.files['cv']) {
    const file = req.files['cv'][0];
    const allowedDocTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (!allowedDocTypes.includes(file.mimetype)) {
      return res.status(400).json({ message: 'CV must be a PDF or image file.' });
    }
    fileLinks.push({
      name: 'CV: ' + file.originalname,
      url: file.path
    });
  }

  const emailBody = `
    <h3 style="color: #333;">Student Application Details</h3>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Father's Name:</strong> ${fatherName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Postal Code:</strong> ${postalCode}</p>
    <p><strong>City:</strong> ${city}</p>
    <p><strong>State:</strong> ${state}</p>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Highest Qualification:</strong> ${qualification}</p>
  `;

  sendEmail('psfschoolweb@gmail.com', 'New Study Application Submission', emailBody, fileLinks);
  res.status(200).json({ 
    message: 'Application submitted successfully! We will contact you soon.',
    fileLinks
  });
});

app.get('/test', (req, res) => {
  res.json({ message: "Backend is working!" });
});

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Server running on port ${PORT}`);
// });// Change from this

// To this:
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});