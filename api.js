import express from "express";
const app = express();
import cors from "cors";
import {Users} from "./Users"


app.use(cors());

app.get("/", (req, res) => {
    res.json("users")
});

app.listen(5000, () => console.log("API is working"));