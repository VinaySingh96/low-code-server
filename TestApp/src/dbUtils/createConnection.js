const mongoose = require('mongoose');

const connectToDatabase = async () => {
  const uri = 'mongodb://localhost:27017/base-server'; // Replace with your database name

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Uncomment the following line if you are using the old URL string parser and topology engine
      // useCreateIndex: true,
      // useFindAndModify: false,
    });
    console.log('Connected to the database successfully 🗂️');
  } catch (error) {
    console.error('Error connecting to the database', error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = { connectToDatabase };
