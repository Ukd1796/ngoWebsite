const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home");
})

app.get("/ngo",function(req,res){
    res.render("ngo");
})

app.get("/school",function(req,res){
    res.render("school");
})


app.listen(3000,function(){
    console.log("server is running on port 3000!!");
});