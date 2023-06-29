const { Router } = require('express');
const router = Router();


let auth = (req, res, next) => {
    if (req.session && req.session.logged == true){
        return next()
    } else {
        return res.sendStatus(401)
    }
}

router.post('/ref', (req, res) => {
    const {method, cla} = req.body
    let c = require(`../controllers/${cla}`)
    let i = new c
    i[method](req,res)

})



router.get('/home', (req, res) => {
    res.render('home')
})
router.get('/yamete', auth, (req, res) => {
    res.send("Yamete Kudasai Onichan")
}
)

router.post('/register', require('../controllers/register'))

module.exports = router;