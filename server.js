const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = (require = require("./app"));

//Connect to database
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("DB connection succesful");
  })
  .catch(() => {
    console.log("DB connection failed");
  });

//Start server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on ${port}.`);
});
