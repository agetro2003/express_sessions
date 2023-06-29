const pool = require('pg');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'eduardoeg002@gmail.com',
        pass: 'ofgsugevxadjxsth'
    }
});


const register = (req, res) => {
    const { nombre, email, password } = req.body;
    var mailOptions = {
        from: 'eduardoeg002@gmail.com',
        to: email,
        subject: 'Gay',
        text: 'Eres marico'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send(error.message);
        } else {
            console.log("Email sent" + info.response);
            res.status(200).send("Mail enviado");
        }
    });

    
}

module.exports = register;