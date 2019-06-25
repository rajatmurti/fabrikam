var express=require('express');
var app=express();
var productController=function(req,res){
var products=[
{name:"monitor",price:"6000"},
{name:"keyboard",price:"500"},
{name:"broadband",price:"3000"},
{name:"Inverter",price:"10000"}
];
res.send(products);
};
app.get('/products',productController);
var server=app.listen(8087,function(){
var host=server.address().adress;
var port=server.address().port;

 console.log("app listening at http://localhost:8087", host, port);
})
