const pool = require('../database/pool');

class SessionHandler {
    constructor(){}

    async login(req, res) {
        const response = await pool.query(`select * from session where correo = '${req.body.email}'`)
        let user = response.rows[0]
        
        
          if (!user || !user.pswd) {
            res.sendStatus(401)
        } else if (req.body.pass.trim() === user.pswd.trim()) {
            req.session.user = user.usuario
            req.session.logged = true
            res.sendStatus(200);
        } else {
            res.sendStatus(401)
    
        }
    }

    logout(req, res) {
        req.session.destroy();
        res.send("logout success!");
    }
}


module.exports = SessionHandler;