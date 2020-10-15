const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // https://mongoosejs.com/docs/deprecations.html
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDb;


