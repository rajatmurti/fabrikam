var express = require('express');
var app = express();
var feedbackController=function (req, res) {
  var feedback=[
            {Name:'Rajat',message:'UI should improved',age:24},
            {Name:'Sourabh',message:'Need job if any',age:23},
	    {Name:'sanjay',message:'great job done',age:24},
	    {Name:'Prashant',message:'thank you',age:30},
      ];
  res.send(feedback);
};

app.get('/feedback',feedbackController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("app listening at http://localhost:8088", host, port)
})