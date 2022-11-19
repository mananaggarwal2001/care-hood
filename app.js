const express = require('express');
const request = require('request');
const bodyparser = require('body-parser');
const Auth = require('./model').AuthUser;
const LocalUser= require('./model').localUser;
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(("public")))
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/loginPage', (req,res)=>{
    res.render('Login');
})
app.get('/registerUser',  (req,res)=>
{
    res.render('SignUp');

})
app.post('/registerUser', async (req,res)=>{
    const {username, email, password}= req.body;
    const user= await Auth.create({
        username: username,
        email:email,
        password:password
    });
    user.save();
})

app.listen('3000',()=>{
    console.log("The port is listen successfully to the number 3000");
})