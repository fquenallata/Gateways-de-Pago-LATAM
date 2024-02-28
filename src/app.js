import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import routes from "./routes/index.js";

const server = express();

server.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 1000000,
  })
);
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.options("", (req, res) => {
  res.header("Access-Control-Allow-Origin", "");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.sendStatus(204);
});

server.use("/", routes);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default server;
