import express from "express";
import {
  createKriteriaController,
  deleteKriteriaController,
  getAllKriteriaController,
} from "../controller/kriteriaController.js";

const router = express.Router();

router.get("/", getAllKriteriaController);
router.post("/", createKriteriaController);
router.delete("/:id", deleteKriteriaController);

export default router;
