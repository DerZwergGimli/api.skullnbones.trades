import {Request, Response} from "express"

/**
 * @openapi
 *  /:
 *     get:
 *       description: |
 *         Gets a status message
 *       operationId: getStatus
 *       responses:
 *         "200":
 *           content:
 *             text/plain:
 *               schema:
 *                 example: Weclome to S&B StarAtlas Trades API
 *                 type: string
 *                 x-content-type: text/plain
 *           description: status message resutlt
 *         "400":
 *           description: error
 *       summary: status
 *       tags:
 *       - UDF
 */
export function endpoint_status(req: Request, res: Response) {
  res.status(200).send("Welcome to S&B StarAtlas Trades API\n")
}
