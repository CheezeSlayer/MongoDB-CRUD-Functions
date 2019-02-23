var mongoose = require("mongoose");

mongoose.Promise = global.Promise;//tells mongoose we want to use built in promise library rather than 3rd party
mongoose.connect("mongodb://localhost:27017/TodoApp");

module.exports = {
  mongoose: mongoose
};
