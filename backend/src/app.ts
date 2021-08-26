import express from "express";
import bodyParser from "body-parser";
import { router } from "./routes";
import cors from "cors";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);

export { app };
