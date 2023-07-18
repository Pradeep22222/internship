import "dotenv/config";
import express from "express";
import cors from "cors";
import userRouter from "./src/routers/userRouter.js";
import { dbConnection } from "./src/config/dbConfig.js";
const app = express();
const PORT = process.env.PORT;
dbConnection();
// middlewares
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);

app.use((error, req, res, next) => {
  console.log(error);
  const statusCode = error.status || 404;
  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});
// app.use("/", (req, res, next) => {
//   try {
//     res.json({
//       status: "success",
//       message: "You hit the server root",
//     });
//   } catch (error) {
//     next(error);
//   }

//   next(error);
// });
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server running on http://localhost:${PORT}`);
});
