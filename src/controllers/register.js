const nodemailer = require('nodemailer');
const crypto = require('crypto')
const algorithm = "aes-256-cbc"
const initVector = crypto.randomBytes(16)
const SecurityKey = crypto.randomBytes(32)

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'eduardoeg002@gmail.com',
        pass: 'ofgsugevxadjxsth'
    }
});


const register = async(req, res) => {
    res.send(initVector + " y la otra es " + SecurityKey)

    try {
        
    const { nombre, email, password } = req.body;
    let data = {
        nombre: nombre, 
        email: email, 
        password: password
    }

    var mailOptions = {
        from: 'eduardoeg002@gmail.com',
        to: email,
        subject: 'Gay',
        text: 'Eres marico',
        
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

    } catch (error) {
        res.send(req.body)
        
    }
    
}

module.exports = register;