import dotenv from "dotenv";
import "./db/mongoose.js";
import { app } from "./app.js";

dotenv.config();
const IP = process.env.IP || "localhost";
const PORT = process.env.PORT || 5200;

app.listen(+PORT, IP, () => {
  console.log(`Servidor escuchando en el puerto ${PORT} de la dirección ${IP}`);
});