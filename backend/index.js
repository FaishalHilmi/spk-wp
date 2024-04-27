import express from "express";
import KriteriaRoute from "./src/routes/kriteriaRoute.js";
import MahasiswaRoute from "./src/routes/mahasiswaRoute.js";
import HasilRoute from "./src/routes/hasilRoute.js";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    method: ["GET", "POST", "PUT", "DELETE"],
    origin: "*",
  })
);

app.use("/kriteria", KriteriaRoute);
app.use("/mahasiswa", MahasiswaRoute);
app.use("/hasil", HasilRoute);

app.listen(PORT, () => {
  console.log(`Listen at http://localhost:${PORT}`);
});
