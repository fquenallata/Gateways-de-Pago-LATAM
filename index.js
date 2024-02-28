import server from "./src/app.js";
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`server raise in port :${PORT}`);
});
