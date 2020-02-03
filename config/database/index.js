const mongoose = require('mongoose');
const config = require('../');
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true,useUnifiedTopology: true });
mongoose.Promise = global.Promise;
mongoose.set(`useFindAndModify`,false);
module.exports = mongoose;