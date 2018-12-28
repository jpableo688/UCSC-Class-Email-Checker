var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'LOGIN USERNAME HERE',
    pass: 'LOGIN PASSWORD HERE'
  }
});

var mailOptions = {
  from: 'FROM EMAIL HERE',
  to: 'TO EMAIL HERE',
  subject: 'SUBJECT HERE',
  text: 'That was easy!'
};

module.exports = {
  sendEmail: function(){
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}