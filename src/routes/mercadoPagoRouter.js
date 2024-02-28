import { Router } from "express";
import { postPreference } from "../handlers/mercadoPagoHandler.js";

const mercadoPagoRouter = Router();
mercadoPagoRouter.post("/create_preference", postPreference);

export default mercadoPagoRouter;
