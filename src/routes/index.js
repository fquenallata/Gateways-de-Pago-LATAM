const { Router } = require("express");
const router = Router();

const mercadoPagoRouter = require("./mercadoPagoRouter");

router.use("/MercadoPago", mercadoPagoRouter);

module.exports = router;
