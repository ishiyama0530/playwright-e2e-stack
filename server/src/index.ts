import userRoutes from "./routes/user";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";

const app = express();

app.use(
  cors({
    origin: [process.env.WEB_ORIGIN!],
  })
);

app.use(express.json());
app.use("/users", userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
