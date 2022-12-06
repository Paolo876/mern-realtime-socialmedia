const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false
    // });
    // console.log("Mongodb connected");
    const db = await mongoose.connect(process.env.MONGO_URI)
    mongoose.set('bufferCommands', false);
    console.log("mongodb connected: ".cyan.underline.bold, db.connection.host)
  } catch (error) {
    console.log("error: ".red.underline.bold, error.message)
    process.exit(1);
  }
}

module.exports = connectDB;
