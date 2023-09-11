
  const mongoose = require("mongoose");

  const connectDb = async () => {
    try {
      const connect = await mongoose.connect('mongodb+srv://<username>:<password>@cluster0.6cmkalo.mongodb.net/<databaseName>?retryWrites=true&w=majority');
      console.log(
        "Database connection established",
        connect.connection.host,
        connect.connection.name
      );
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  };
  
  module.exports = connectDb;
  