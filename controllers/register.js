const pool = require('pg');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const { json } = require('express');

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

    let token = await bcrypt.hash(JSON.stringify(data), 8)
    let validation = await bcrypt.compare(JSON.stringify(data), token)
    var mailOptions = {
        from: 'eduardoeg002@gmail.com',
        to: email,
        subject: 'Gay',
        text: 'Eres marico',
        html: `<h1> ${token} </h1>
                <p> ${validation} </p>`
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