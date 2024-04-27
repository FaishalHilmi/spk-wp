import express from "express";
import {
  getAllHasilController,
  updateRank,
  getAllRank,
} from "../controller/hasilController.js";

const router = express.Router();

router.get("/", getAllHasilController);

router.get("/rank", getAllRank);

router.post("/updateRank", updateRank); //button

export default router;
