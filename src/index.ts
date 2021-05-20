import express from "express";
import {optionalHandlers} from "./handlers";
import path from "path";


const app = express();
const PORT = 4000;

app.use(optionalHandlers());

app.use("/resources", express.static(path.resolve(__dirname, "../resources")));

app.get("/", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
})

app.listen(PORT, () => {
  console.log("Server started at port", PORT);
})
