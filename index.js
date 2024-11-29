import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
config();

const app = express();
// app.use(express.json());
app.use(bodyParser.json())

import midtransRouter from './src/routes/midtransRoute.js';
app.use(midtransRouter);

app.listen(process.env.PORT, () => {
    console.log(`running in port ${process.env.PORT}`);
});