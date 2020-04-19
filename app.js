const express = require("express");
const morgan = require("morgan");
const NARouter = require("./routes/NARoutes");
const userRouter = require("./routes/userRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

//###Middlewares###

//Development loggin
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

//Body parser
app.use(express.json());

//Routes
app.use("/api/v1/NA", NARouter);
app.use("/api/v1/users", userRouter);

//###Error Handling###

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
