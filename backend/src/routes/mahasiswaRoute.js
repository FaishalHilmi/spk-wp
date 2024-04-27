import express from "express";
import {
  createMahasiswaController,
  deleteMahasiswaController,
  getAllMahasiswaController,
  getMahasiswaByIdController,
} from "../controller/mahasiswaController.js";

const router = express.Router();

router.get("/", getAllMahasiswaController);
router.get("/:id", getMahasiswaByIdController);
router.post("/", createMahasiswaController);
router.delete("/:id", deleteMahasiswaController);

export default router;
