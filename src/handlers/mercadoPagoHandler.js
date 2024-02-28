import { postPreference_MP } from "../controllers/mercadoPagoController.js";

const postPreference = async (req, res) => {
  try {
    const { title, quantity, price } = req.body;
    const response = await postPreference_MP(title, quantity, price);
    res.status(200).json({ id: response.id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { postPreference };
