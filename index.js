const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// Ensure 'uploads' directory exists
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // user: 'psfschoolweb@gmail.com',
    // pass: 'pbra rhcq fjmk dksk',
    user: 'psfschoolwebsite@gmail.com',  // Your email address
    pass: 'lpwr cbnu hvct wols', 
  },
});

/** 
 * 📌 Route 1: Job Application Form
 */
app.post('/apply', upload.single('file'), (req, res) => {
  const { name, email, phone, address, qualification, specialization } = req.body;
  const file = req.file;

  if (!name || !email || !phone || !address || !qualification || !specialization) {
    return res.status(400).json({ error: 'All fields except CV are required' });
  }

  const mailOptions = {
    from: 'psfschoolweb@gmail.com',  // Replace with your email
    to: 'psfschoolweb@gmail.com',   // Replace with your email
    subject: 'Job Application',
    html: `
      <h3>Student Application Details</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Highest Qualification:</strong> ${qualification}</p>
      <p><strong>Subject Specialization:</strong> ${specialization}</p>
    `,
    attachments: file ? [{ filename: file.originalname, path: path.join(__dirname, uploadDir, file.filename) }] : [],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return res.status(500).send('Error sending email');
    res.status(200).send('Application submitted successfully!');
  });
});

/** 
 * 📌 Route 2: Contact Form
 */
app.post('/contact', upload.single('file'), (req, res) => {
  const { name, email, message } = req.body;
  const file = req.file;

  const mailOptions = {
    from: 'psfschoolweb@gmail.com',  // Replace with your email
    to: 'psfschoolweb@gmail.com',  // Replace with your email
    subject: 'New Contact Form Submission',
    html: `
      <h3>Contact Form Details</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    attachments: file ? [{ filename: file.originalname, path: path.join(__dirname, uploadDir, file.filename) }] : [],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return res.status(500).send('Error sending email');
    res.status(200).send('Email sent successfully!');
  });
});

/** 
 * 📌 Route 3: Study Application Form
 */
app.post(
  '/study-apply',
  upload.fields([
    { name: 'profilePic', maxCount: 1 },
    { name: 'qualificationFiles', maxCount: 5 },
  ]),
  async (req, res) => {
    try {
      const { firstName, lastName, dob, gender, fatherName, email, phone, address, postalCode, city, qualification } = req.body;
      const profilePic = req.files['profilePic'] ? req.files['profilePic'][0] : null;
      const qualificationFiles = req.files['qualificationFiles'] || [];

      if (!firstName || !lastName || !email || !phone) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      res.status(200).json({ message: 'Application submitted successfully! We will contact you soon.' });

      const attachments = [];
      if (profilePic) {
        attachments.push({ filename: profilePic.originalname, path: path.resolve(uploadDir, profilePic.filename) });
      }
      qualificationFiles.forEach((file) => {
        attachments.push({ filename: file.originalname, path: path.resolve(uploadDir, file.filename) });
      });

      const mailOptions = {
        from: 'psfschoolweb@gmail.com',  // Replace with your email
        to: 'psfschoolweb@gmail.com',  // Replace with your email
        subject: 'New Study Application Submission',
        html: `
          <h3>Student Application Details</h3>
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
          <p><strong>Highest Qualification:</strong> ${qualification}</p>
        `,
        attachments: attachments,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.log('Error sending email:', error);
        else console.log('Email sent:', info.response);
      });
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, uploadDir)));

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
