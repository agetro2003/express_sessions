const express = require('express')
const session = require('express-session')

const port = 3000

const app = express();

app.set('view engine', 'ejs')
app.set('views', __dirname+'/src/views')
app.use(express.static(__dirname+"/src/public"))
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(session({
    secret: '1234567890',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60
      
    }
  }))



// app.get('/login', (req, res) => {
//     if(!req.query.user || !req.query.pass){
//         res.send('Login fallido')
//     } else if (req.query.pass == "12345678"){
//         req.session.user = req.query.user
//         req.session.logged = true
//         res.send("Login correcto");
//     } else{
//                 res.send("contraseña incorrecta")

//     }
    
// });

// app.get('/logout', function (req, res) {
//     req.session.destroy();
//     res.send("logout success!");
//   });

//   app.get('/home', (req,res)=>{
//     res.render('home')
//   })
//   app.get('/yamete', auth, (req, res) =>{
//     res.send("Yamete Kudasai Onichan")
//   })

  app.use(require('./src/routes/routes'))

app.listen(port, (req, res)=>{
console.log('servidor en ',port)
})



app.use((req, res, next) => {
    res.status(404).render("404")
})

