import express from "express";
import path from "path";
import {auth} from "./handlers/auth";
import {delay} from "./handlers/delay";
import {log} from "./handlers/log";


const app = express();
const PORT = process.env.PORT || 4000;

app.use(auth());
app.use(delay(), log());

app.use("/resources", express.static(path.resolve(__dirname, "../resources")));

app.get("/", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
})

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
})
