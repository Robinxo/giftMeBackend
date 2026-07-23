import { Router } from "express";
import { createGift } from "../controllers/gift.controller.js";

const router = Router();

router.post("/creategift", createGift);
