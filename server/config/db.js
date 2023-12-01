const mongoose = require("mongoose");

const connectDB = (URI) => {
  mongoose.connect(URI, {
  })
  .then(() => {
      console.log('Connected to MongoDB');
  })
  .catch(err => {
      console.error('Error connecting to MongoDB:', err.message);
      process.exit(1); // Exit process with failure
  });
};

module.exports = connectDB;
