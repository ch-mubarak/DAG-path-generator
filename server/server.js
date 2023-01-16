import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import graphRoute from "./routes/graphRoute.js";
import { errorHandler } from "./middleware/errorHandler.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/graph", graphRoute);
//error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));

