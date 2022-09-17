import express, { Request as ExRequest, Response as ExResponse } from "express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "./routes";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

export const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(swaggerUi.generateHTML(await import("../src/swagger.json")));
});

RegisterRoutes(app);
