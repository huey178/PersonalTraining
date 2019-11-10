//jshint esversion:6

const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.render('home');
});

app.get("/meet-tyler", function (req,res){
  res.render("meet-tyler");
});


app.get("/contact-me", function(req,res){
  res.render("contact-me");
});

app.listen(process.env.PORT, function(){
  console.log("This server is now live!");
});
