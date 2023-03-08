const mongoose = require("mongoose")

const connectDB = (url) => {
  //  object is passed just to remove deprecated warnings
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
