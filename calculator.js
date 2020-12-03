const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
}); 

app.post("/", function(req, res){
	var num1 = Number(req.body.n1);
	var num2 = Number(req.body.n2);
	var result = num1+num2;
	res.send("Calculator"+result);
});

app.get("/bmicalculator",function(req, res){
	res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmicalculator",function(req, res){
	var wt = parseFloat(req.body.weight);
	var ht = parseFloat(req.body.height);
	var result = wt/(ht*ht);
	res.send("Result -> "+result);
});


app.listen(3000, function(){
	console.log("Server Started");
});