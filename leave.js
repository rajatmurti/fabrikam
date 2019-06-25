var express = require('express');
var app = express();
var leaveController=function (req, res) {
  var leaves=[
            {Name:'Rajat',from:'02-06-2019',upto:'04-06-2019',status:'paid'},
            {Name:'Rajat',from:'10-04-2019',upto:'11-04-2019',status:'Unpaid'},
	   {Name:'Rajat',from:'05-02-2019',upto:'07-02-2019',status:'paid'},
	    {Name:'Rajat',from:'01-01-2019',upto:'02-01-2019',status:'paid'},
      ];
  res.send(leaves);
};

app.get('/leaves',leaveController);

var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("app listening at http://localhost:8086", host, port)
})