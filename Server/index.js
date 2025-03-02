import express from "express";

import cors from "cors";

import router from "./routes/route.js";

const app = express();

//Plugin Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Routes
app.use(router);

app.listen(7000, () => console.log("Server is running on port 3000"));
