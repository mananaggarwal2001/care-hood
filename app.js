const express = require('express');
const request = require('request');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(("public")))
app.get('/',(req,res)=>{
    res.render('Login');
})
app.post('/loginUser',(req,res)=>{

    console.log(req.body);

})

app.listen('3000',()=>{
    console.log("The port is listen successfully to the number 3000");
})