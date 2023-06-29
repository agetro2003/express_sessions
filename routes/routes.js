const { Router } = require('express');
const router = Router();


let auth = (req, res, next) => {
    if (req.session && req.session.logged == true){
        return next()
    } else {
        return res.sendStatus(401)
    }
}

router.get('/login', (req, res) => {
    if (!req.query.user || !req.query.pass) {
        res.send('Login fallido')
    } else if (req.query.pass == "12345678") {
        req.session.user = req.query.user
        req.session.logged = true
        res.send("Login correcto");
    } else {
        res.send("contraseña incorrecta")

    }
})
router.get('/logout', function (req, res) {
    req.session.destroy();
    res.send("logout success!");
});


router.get('/home', (req, res) => {
    res.render('home')
})
router.get('/yamete', auth, (req, res) => {
    res.send("Yamete Kudasai Onichan")
}
)

router.post('/register', require('../controllers/register'))

module.exports = router;