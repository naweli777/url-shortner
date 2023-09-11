
// const mongoose = require('mongoose')
//  mongoose.connect('mongodb+srv://naweliverma7:YIHeo7HHUUU4d2XB@cluster0.6cmkalo.mongodb.net/urlShortner?retryWrites=true&w=majority',{
//     useNewUrlParser: true, useUnifiedTopology: true,
// })
// .then(() => {
//     console.log('MongoDB Connected');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

  const mongoose = require("mongoose");

  const connectDb = async () => {
    try {
      const connect = await mongoose.connect('mongodb+srv://naweliverma7:YIHeo7HHUUU4d2XB@cluster0.6cmkalo.mongodb.net/urlShortner?retryWrites=true&w=majority');
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
  
//   mongodb+srv://naweliverma7:<password>@cluster0.6cmkalo.mongodb.net/

//   mongodb+srv://naweliverma7:<password>@cluster0.6cmkalo.mongodb.net/?retryWrites=true&w=majority

//   mongodb+srv://naweliverma43:CvbwXUWYRiHT070S@cluster0.gwm4y2i.mongodb.net/todoDb?retryWrites=true&w=majority