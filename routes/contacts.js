var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacts', { 
    title: 'Contacts',
   });
});

// Send Email
router.post('/send', (req, res, next) => {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'u608110@gmail.com',
      pass: 'secret'
    }
  });

  var mailOptions = {
    from: '"Aleksey Belchenkov?" <u608110@gmail.com>',
    to: 'belchenkov.leha@mail.ru', // lists
    subject: 'Hello from PCRepair', 
    text: 'You have a submission from... Name: '+req.body.name+' Email: '+req.body.email+' Message: '+req.body.message,
    html: '<p>You have a submission from...</p> <ul><li>Name: '+req.body.name+'</li><li> Email: '+req.body.email+'</li><li> Message: '+req.body.message+'</li></ul>'
  }

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
        return console.log(error);
      }
      console.log('Message Sent: '+ info.response);
      res.redirect('/');
    });
});


module.exports = router;
