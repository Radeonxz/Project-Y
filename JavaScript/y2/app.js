var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hi there!")
});

app.get("/bye", function(req, res){
  res.send("Goodbye!")
});

app.get("/dog", function(req, res){
  console.log("Someone sends a request for /dog!")
  res.send("MEOW")
});


//add subtitile for url
app.get("/r/:subchillName/", function(req, res){
  //console.log(req.params);
  var subchill = req.params.subchillName;
  res.send("Welcome to the " + subchill.toUpperCase() + " Subchill!!! ");
});

app.get("/r/:subchillName/comments/:chillId/:chillTitle/", function(req, res){
  console.log(req.params);
  res.send("Welcome to the comments page");
});


//oder of the routes matters, always put it last
app.get("*", function(req, res){
  res.send("I believe you are lost now!!!")
});



app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Server has started!!!")
});