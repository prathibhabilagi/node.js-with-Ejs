const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRIDAPIKEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: '@gmail.com',
        from: 'akarshb02@gmail.com',
        subject: 'This is the first creation',
        text: 'I hope this actually get to you'
    
    })  
}


const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: '@gmail.com',
        from: 'akarshb02@gmail.com',
        subject: 'This is the first creation',
        text: 'I hope this actually get to you'
    
    })    
} 

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

