import "log-timestamp"
import express from "express"
import swaggerJsdoc from "swagger-jsdoc"
import swaggerUI from "swagger-ui-express"
import { endpoint_config } from "./endpoints/endpoint_config"
import { endpoint_time } from "./endpoints/endpoint_time"
import { endpoint_status } from "./endpoints/endpoint_status"

console.log("--- API Starting ---")

const app = express()
const PORT = 5000

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "S&B - StarAtlas Trades API",
      version: "2.0.0",
      description: "This is the Skull&Bones Trades API V2",
    },
  },
  apis: ["./src/index*.ts", "./src/endpoints/*.ts"], // files containing annotations as above
}

const swaggerDocs = swaggerJsdoc(options)
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.get("/", (res, req) => {
  endpoint_status(res, req)
})

app.get("/time", (res, req) => {
  endpoint_time(res, req)
})

app.get("/config", (req, res) => {
  endpoint_config(req, res)
})

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`))
