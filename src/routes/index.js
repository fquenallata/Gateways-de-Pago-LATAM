import { Router } from "express";
const router = Router();

import mercadoPagoRouter from "./mercadoPagoRouter.js";

router.use("/MercadoPago", mercadoPagoRouter);

export default router;
