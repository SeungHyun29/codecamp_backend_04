/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: 목록 가져오기
 *     tags: [Starbucks]
 *     parameters:
 *          - in: query
 *            name: number
 *            type: int
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: 아메리카노
 *                          kcal:
 *                              type: int
 *                              example: 5
 */

