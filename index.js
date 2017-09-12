const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const port = process.env.PORT || 5252;


app.post('/mail', (req, res) => {
	console.log(req.body);
	res.end(200);
});


http.listen(port, function(){
  console.log('listening on localhost:' + port);
});
