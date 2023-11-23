import express from "express";
import cors from "cors";
import { userRouter } from "./routers/user.routes.js";
import { defaultRouter } from "./routers/default.routes.js";

export const app = express();
app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(defaultRouter);
