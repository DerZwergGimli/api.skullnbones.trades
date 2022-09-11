import {Request, Response} from "express"

/**
 * @openapi
 *  /time:
 *     get:
 *       description: |
 *         Gets server time
 *       operationId: getTime
 *       responses:
 *         "200":
 *           content:
 *             text/plain:
 *               schema:
 *                 example: 1662761714
 *                 type: number
 *                 x-content-type: text/plain
 *           description: time message result
 *         "400":
 *           description: error
 *         "404":
 *           description: not found
 *       summary: time
 *       tags:
 *       - UDF
 */
export function endpoint_time(req: Request, res: Response) {
  const unixTime = Math.floor(Date.now() / 1000)
  if (unixTime) {
    res.status(200).send(unixTime.toString())
  } else {
    res.status(404).send("Not-Found")
  }
}
