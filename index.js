const bluebird = require('bluebird');

const app = require('express')();
const multiparty = bluebird.promisifyAll(require('multiparty'), {multiArgs: true});
const util = require('util');

const mongoose = require('mongoose');
mongoose.Promise = bluebird;

const Email = require('./db/Models/Email').model(mongoose);
const User = require('./db/Models/User').model(mongoose);

const port = process.env.PORT || 5252;

app.head('/mail', function (req, res) {
	res.send(200); // respond positively
});

app.post('/mail', async (req, res) => {
	var form = new multiparty.Form({
		maxFieldsSize: 70000000
	});

	const fields = await form.parseAsync(req);

	for (let mail of fields) {
		if (!("mailinMsg" in mail)) continue;
		
		let mailObj = JSON.parse(mail.mailinMsg[0]);

		mongoose.connect('mongodb://localhost/email', {useMongoClient: true});

		const {to, from, cc, subject, text, html} = mailObj;
		
		const newEmail = new Email({to, from, cc, subject, text, html});
		console.log(newEmail);

		for (let account of to) {
			giveEmail(newEmail, account.address);
		}
		
		for (let account of cc) {
			giveEmail(newEmail, account.address);
		}
	}

	res.status(200).end();
});

async function giveEmail(email, addr) {
	const user = await User.findOne({'accounts.address': addr});
	if (user) {
		console.log("1");
		for (account of user.accounts) {
			console.log(account);
			if (account.address === addr) {
				account.emails.push(email);
				user.save();
				
				console.log("heyo");
				return true;
			}
		}
	}

	return false;
}


app.listen(port, function () {
	console.log('listening on localhost:' + port);
});
