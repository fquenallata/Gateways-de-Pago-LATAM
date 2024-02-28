const getMensaje = async (userId) => {
  try {
    return "HOLA";
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getMensaje };
