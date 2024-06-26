const mongoose = require("mongoose");

const connectwithDb = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(console.log("DB GOT CONNECTED"))
    .catch((error) => {
      console.log(`DB CONNECTION ISSUE`);
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectwithDb;
