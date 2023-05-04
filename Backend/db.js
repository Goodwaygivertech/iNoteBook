const mongoose = require("mongoose");
const mongoURI =
  "mongodb://mongoose:7anLLxkDf2xAXNaT@ac-h6ugjnc-shard-00-00.xcpryid.mongodb.net:27017,ac-h6ugjnc-shard-00-01.xcpryid.mongodb.net:27017,ac-h6ugjnc-shard-00-02.xcpryid.mongodb.net:27017/iNoteBookNew?ssl=true&replicaSet=atlas-q45dsr-shard-0&authSource=admin&retryWrites=true&w=majority";

// mongodb+srv://mongoose:<password>@cluster0.xcpryid.mongodb.net/?retryWrites=true&w=majority
mongoose.set("strictQuery", false);
const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("hey this is connected SuccessFully bro .............");
    })
    .catch((err) => {
      console.log("here  is a problem to connect", err);
    });
};
module.exports = connectToMongo;

// const mongoose = require("mongoose");

// const db =
//   "mongodb+srv://mongoose:7anLLxkDf2xAXNaT@cluster0.xcpryid.mongodb.net/test";

// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => {
//     console.log("Connected SuccessFully Bro ......");
//   })
//   .catch((err) => {
//     console.log("here is a problem no Connection");
//   });
