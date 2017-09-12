const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = process.env.PORT || 5252;


app.post('/mail', (req, res) => {
	console.log(req.body);
	res.status(200).end();
});


http.listen(port, function(){
  console.log('listening on localhost:' + port);
});
