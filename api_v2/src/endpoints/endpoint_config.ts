import {Request, Response} from "express"

/**
 * @openapi
 * /config:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
export function endpoint_config(req: Request, res: Response) {
  res.send(["config"])
}
