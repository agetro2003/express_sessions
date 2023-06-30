const cryptojs = require('crypto-js');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'eduardoeg002@gmail.com',
        pass: 'ofgsugevxadjxsth'
    }
});

const register = async(req, res) => {

    try {
        
    const { nombre, email, password } = req.body;
    let data = {
        nombre: nombre, 
        email: email, 
        password: password
    }

    let token = cryptojs.AES.encrypt(JSON.stringify(data), "myPass").toString();;

    var mailOptions = {
        from: 'eduardoeg002@gmail.com',
        to: email,
        subject: 'Validate email',
        html: `
     <p>Presione <a href="http://localhost:3000/validate?token=${encodeURIComponent(token)}>aqui</a> para validar su usario</p>
        <h1>${token}</h1>

        `
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