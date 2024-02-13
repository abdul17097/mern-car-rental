const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const carRoutes = require("./routes/carRoutes");
const orderRoutes = require("./routes/orderRoutes");

const {
  notFound,
  errrorHandler,
} = require("./middleware/errorHandlerMiddleware.js");
const cors = require("cors");
const app = express();

connectDB();
app.use(express.json());
app.use(
  cors({
    origin: "https://mern-car-rental-frontend.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(notFound);
app.use(errrorHandler);

app.use("/api", userRoutes);
app.use("/api", carRoutes);
app.use("/api", orderRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.get("/", (req, res) => {
  res.json("Hello World");
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
