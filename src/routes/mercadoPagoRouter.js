const { Router } = require("express");
const mercadoPagoRouter = Router();
const { getMensajeMP } = require("../handlers/mercadoPagoHandler");

mercadoPagoRouter.get("/hola", getMensajeMP);

module.exports = mercadoPagoRouter;
