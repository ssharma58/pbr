const express = require('express');
const app = express();
const port =3000;

const cors =require('cors');
app.use(cors());
//app.use('/', express.static('public'));
 app.use(cors());
console.log("fromNodemon");
var budget = require('./server.json');


app.get('/budget',(req,res)=>{
res.json(budget);
});

//const jsondata = require("./Users/cci-loaner/personal-budget/server.json");

app.listen(port,() =>{
 console.log(' API served '+port);
//console.log(jsondata);
});