var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hi there, welcome to my page!");
});


//1
// app.get("/speak/:animals/", function(req, res){
//   var animal = req.params.animals;
//   res.send("The " + animal + " says 'Oink'!!! ");
// });
app.get("/speak/:animal", function(req, res) {
  var animal = req.params.animal.toLowerCase();
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!",
    cat: "LOL",
    goldfish: "..."
  }
  var sound = sounds[animal];
  // var sound = "";
  // if(animal === "pig"){
  //   sound = "oink";
  // } else if(animal === "cow"){
  //   sound = "moo";
  // }
  
  res.send("The " + animal + " says '" + sound + "'");
});

//2
// app.get("/repeat/:greetings/:num/", function(req, res) {
//   var word = req.params.greetings;
//   var time = req.params.num;
//   res.send(function(){
//     for (var i = 1; i <= time; i++){
//       console.log(word)
//     }
//   });
// });

app.get("/repeat/:message/:times", function(req, res) {
  var message = req.params.message;
  var times = Number(req.params.times);
  var result = "";
  for(var i=0; i<times; i++){
    result += message + " ";
  }
  res.send(result);
});

app.get("*", function(req, res) {
  res.send("I believe you are lost now!!!") 
});

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Server has started!!!")
});