const { getMensaje } = require("../controllers/mercadoPagoController.js");

const getMensajeMP = async (req, res) => {
  try {
    const response = await getMensaje();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getMensajeMP };
