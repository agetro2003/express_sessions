const cryptojs = require('crypto-js');
const pool = require('../database/pool');

function validate(req, res){
    console.log(req.query.token)
    let dec = cryptojs.AES.decrypt(req.query.token, "myPass");
    console.log(dec)
    let texto = dec.toString(cryptojs.enc.Utf8);
console.log(texto)
    let data = JSON.parse(texto)
    
    const response = pool.query('INSERT INTO session values ($1, $2, $3)', [data.email, data.nombre, data.password])
    
    res.json(response)
}

module.exports = validate;
