/**
 * @swagger
 * /users:
 *   get:
 *     summary: 유저 목록 가져오기
 *     tags: [User]
 *     parameters:
 *          - name: user name
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
 *                          name:
 *                              type: string
 *                              example: 유저 이름
 *                          email:
 *                              type: string
 *                              example: 유저 이메일
 *                          personal:
 *                              type: string
 *                              example: 유저 주민번호
 *                          prefer:
 *                              type: string
 *                              example: 유저가 좋아하는 사이트
 *                          pwd:
 *                              type: string
 *                              example: 유저 비밀번호
 *                          phone:
 *                              type: string
 *                              example: 유저 전화번호
 */


/**
 * @swagger
 * /users:
 *   post:
 *     summary: 유저 목록 등록하기
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             properties:
 *                          name:
 *                              type: string
 *                              example: string
 *                          email:
 *                              type: string
 *                              example: string
 *                          personal:
 *                              type: string
 *                              example: string
 *                          prefer:
 *                              type: string
 *                              example: string
 *                          pwd:
 *                              type: string
 *                              example: string
 *                          phone:
 *                              type: string
 *                              example: string
 *     responses:
 *       200:
 *         description: 성공
 */
