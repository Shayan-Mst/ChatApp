// const nodemailer = require('nodemailer');
import {nodemailer} from 'nodemailer'

export async function sendVerificationEmail(toEmail, code) {
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider (e.g., Gmail)
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password', // Use an app password for security
    },
  });

  let mailOptions = {
    from: 'your-email@gmail.com',
    to: toEmail,
    subject: 'Your Verification Code',
    text: `Your verification code is: ${code}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export function generateCode() {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
  }
  


let verificationCodes = {}; // Object to store codes

export function storeCode(email, code) {
  // Store the code with a 5-minute expiry
  verificationCodes[email] = {
    code: code,
    expiresAt: Date.now() + 5 * 60 * 1000, // Expire in 5 minutes
  };
}

export function verifyCode(email, code) {
  const data = verificationCodes[email];

  if (!data) {
    return { valid: false, message: 'No code found for this email.' };
  }

  if (Date.now() > data.expiresAt) {
    return { valid: false, message: 'Code has expired.' };
  }

  if (data.code !== code) {
    return { valid: false, message: 'Incorrect code.' };
  }

  // Code is valid
  return { valid: true, message: 'Code verified successfully!' };
}

