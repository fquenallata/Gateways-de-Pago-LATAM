import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken:
    "TEST-316727477871907-022818-b13582cb1b7221a0c58eb72108ddb8aa-1076497805",
});

const preference = new Preference(client);

const postPreference_MP = async (title, quantity, price) => {
  try {
    console.log(title, quantity, price);
    const body = {
      items: [
        {
          title: title,
          quantity: Number(quantity),
          unit_price: Number(price),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: "https://c16-35-m-java-development.onrender.com",
        failure: "https://c16-35-m-java-development.onrender.com",
        pending: "https://c16-35-m-java-development.onrender.com",
      },
      auto_return: "approved",
    };

    const result = await preference.create({ body });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { postPreference_MP };
