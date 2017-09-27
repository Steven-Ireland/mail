const Email = require('./Email');

module.exports =  {
  model, schema
}

function schema(mongoose) {
  return new mongoose.Schema({
    username: String,
    password: String,

    accounts: [
      {
        address: String, 
        name: String,
        emails: [Email.schema(mongoose)]
      }
    ],
  });
}

function model(mongoose) {
  return mongoose.model('User', schema(mongoose));
}