var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'MY_EMAIL_ADDRESS',
    pass: 'MY_PASSWORD'
  }
});

var mailOptions = {
  from: 'MY_EMAIL_ADDRESS',
  to: 'FRIEND_EMAIL_ADDRESS',
  subject: 'This is an email sent using Node.js!',
  text: 'This is easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
