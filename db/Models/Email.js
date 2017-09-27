module.exports = {
  schema, model
} 

function schema(mongoose) {
  return new mongoose.Schema({
    to: [{address: String, name: String}],
    from: [{address: String, name: String}],
    cc: [{address: String, name: String}],
    
    subject: String,
    text: String,
    html: String,
  });
}

function model(mongoose) {
  return mongoose.model('Email', schema(mongoose));
}