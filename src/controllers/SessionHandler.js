class SessionHandler {
    constructor(){

    }

    login(req, res) {
        if (!req.query.user || !req.query.pass) {
            res.send('Login fallido')
        } else if (req.query.pass == "12345678") {
            req.session.user = req.query.user
            req.session.logged = true
            res.send("Login correcto");
        } else {
            res.send("contraseña incorrecta")
    
        }
    }

    logout(req, res) {
        req.session.destroy();
        res.send("logout success!");
    }
}


module.exports = SessionHandler;