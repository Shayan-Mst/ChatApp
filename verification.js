const nodemailer = require('nodemailer');



async function sendVerificationEmail(toEmail, code) {
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider (e.g., Gmail)
   

    auth: {
      user: 'chatappchatnest@gmail.com',
      pass: 'uexy saiu duwi fglz ', // Use an app password for security
    },
  });

  let mailOptions = {
    from: 'chatappchatnest@gmail.com',
    to: toEmail,
    subject: 'Your Verification Code',
    html: `
    <p>Hi there!</p>
    <p>Welcome to <strong>chatNest</strong>, your new favorite way to stay connected with friends, family, and colleagues. To make sure it's really you, we just need to verify your email before you can start chatting securely.</p>
    <p>Your security code is:</p>
    <p style="font-size: 24px; font-weight: bold;">${code}</p>
    <p>Please enter this code in the app to complete your email verification. If you didn’t request this, feel free to ignore this message.</p>
    <p>Thank you for choosing <strong>chatNest</strong>! We can't wait for you to start chatting seamlessly and securely.</p>
    <br>
    <p>Best regards,</p>
    <p>The chatNest Team</p>
  `

  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

 function generateCode() {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
  }
  


let verificationCodes = {}; // Object to store codes

 function storeCode(email, code) {
  // Store the code with a 5-minute expiry
  verificationCodes[email] = {
    code: code,
    expiresAt: Date.now() + 5 * 60 * 1000, // Expire in 5 minutes
  };
}

 function verifyCode(email, code) {
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

module.exports = { generateCode,storeCode,verifyCode,sendVerificationEmail };