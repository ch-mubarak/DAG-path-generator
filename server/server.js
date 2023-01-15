import express from "express";
import * as dotenv from "dotenv";
import graphRoute from "./routes/graphRoute.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/graph", graphRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
