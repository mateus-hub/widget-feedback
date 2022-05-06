import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

// controle de seguranca qual frontend pode consumir este backend
app.use(cors());
// avisa express utilizacao de json
app.use(express.json());
//import routes
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP server running!");
});
