import express, { Express } from "express";
import dotenv from "dotenv";
import cors from 'cors'
import multer from "multer"
import swaggerUi from "swagger-ui-express"
import errorHandler from "./utils/error-handler";
import { HistoryRouter } from "./router/history-router";
import { ActionsRouter } from "./router/actions-router";
import { swaggerSpec } from "./utils/swagger";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5050;
const clientURL = process.env.CLIENT_URL || "http://localhost:5000"
const sideServiceURL = process.env.SIDE_SERVICE_URL || "http://localhost:5050"
const upload = multer();

app.use(cors({
  credentials: true,
  origin: [clientURL, sideServiceURL]
}));

app.use(express.json());
app.use(upload.none());

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/v1/history", HistoryRouter)
app.use("/api/v1/actions", ActionsRouter)


app.use(errorHandler as any);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});