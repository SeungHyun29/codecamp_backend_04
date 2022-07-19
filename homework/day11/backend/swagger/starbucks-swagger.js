/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: 커피 목록 가져오기
 *     tags: [Starbucks]
 *     parameters:
 *          - name: menu name
 *            in: query
 *            required: true
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
 *                          img:
 *                              type: string
 *                              example: 이미지 소스 코드
 *                          name:
 *                              type: string
 *                              example: 메뉴 이름
 */

