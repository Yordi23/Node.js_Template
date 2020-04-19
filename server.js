const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("Unhandled Exception. Shuttinh down...");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./.env" });
const app = (require = require("./app"));

//Set database
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

//Connect to database
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connection succesful");
  });

//Start server
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App running on ${port}.`);
});

//Rejected promises handling
process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection. Shutting down...");
  console.log(err.name, err.message);
  server.close(() => process.exit(1));
});
