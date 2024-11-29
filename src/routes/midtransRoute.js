import express from "express";
import { snapping } from "../controllers/midtrans.js";
const router = express.Router();

router.post('/transaction', snapping);
export default router;