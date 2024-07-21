import userRoutes from "./routes/user";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";

const app = express();

// シンプルなログミドルウェア
const simpleLogger = (req: Request, res: Response, next: NextFunction) => {
  const { method, url, ip } = req;
  const origin = req.get("origin") || "Unknown";

  // レスポンスが終了したときにログを出力
  res.on("finish", () => {
    const { statusCode } = res;
    const log = `[${new Date().toISOString()}] ${method} ${url} ${statusCode} - ${ip} - Origin: ${origin}`;
    console.log(log);
  });

  next();
};

// ミドルウェアを適用
app.use(simpleLogger);

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
