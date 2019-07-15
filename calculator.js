var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//DATA 


// Routes

app.get("/add", function(req,res){
    res.sendFile(path.join(__dirname, "view.html"))
})

// Displays a single number, or returns false
app.get("/:operation/:number1/:number2", function (req, res) {
    var operation = req.params.operation;
    var number1 = req.params.number1;
    var number2 = req.params.number2;
    var result= ;

    switch (operation){

    case "add": 
    case "+":
    result = number1 + number2;
    break;

    case "subtract":
        result = number1 - number2;
    break;

    }
   
    res.send(result.toString());
});

