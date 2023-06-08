const express = require("express");
const { errorHandler } = require("./middlewares/errorMiddleware");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const taskRoutes = require("./routes/v1/task.router");
const usersRoutes = require("./routes/v1/user.route");
const curdRoutes = require("./routes/v1/curd.route");
dotenv.config();
//connecting to mongodb database
connectDb();
const app = express();
//middleware bodyparser
app.use(express.json());

//dotenv config
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Node Server</h1>");
});

app.use("/api", taskRoutes);
app.use("/api/users", usersRoutes);
app.use("/v2", curdRoutes);

app.use(errorHandler);

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`
      .inverse
  );
});
