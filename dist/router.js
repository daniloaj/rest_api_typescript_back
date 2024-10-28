"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("./handlers/product");
const express_validator_1 = require("express-validator");
const middleware_1 = require("./middleware");
const router = (0, express_1.Router)();
/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: The product ID
 *          example: 1
 *        name:
 *          type: string
 *          description: The product name
 *          example: "Monitor"
 *        price:
 *          type: decimal
 *          description: The product price
 *          example: 300
 *        availability:
 *          type: boolean
 *          description: The product availability
 *          example: true
 */
/**
 * @swagger
 * /api/product:
 *  get:
 *    summary: Get a list of products
 *    tags:
 *        - Products
 *    description: Return a list of products
 *    responses:
 *        200:
 *            description: Successful response
 *            content:
 *                application/json:
 *                    schema:
 *                        type: array
 *                        items:
 *                            $ref: '#/components/schemas/Product'
 */
router.get("/", product_1.getProduct);
/**
 * @swagger
 * /api/product/{id}:
 *  get:
 *    summary: Get a product by ID
 *    tags:
 *      - Products
 *    description: Return a product based on its unique ID
 *    parameters:
 *      - in: path
 *        name: id
 *        description: The ID of the product to retrieve
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Successful Response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      404:
 *        description: Not found
 *      400:
 *        description: Bad Request - Invalid ID
 *
 */
router.get("/:id", (0, express_validator_1.param)("id").isInt().withMessage("Id No Valido"), middleware_1.InputErrors, product_1.getOneProduct);
/**
 * @swagger
 * /api/product/:
 *  post:
 *    summary: Add a product
 *    tags:
 *      - Products
 *    description: Add a product
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  example: Monitor
 *                price:
 *                  type: number
 *                  example: 399
 *
 *    responses:
 *      200:
 *        description: Successful Response
 *      404:
 *        description: Not found
 *      400:
 *        description: Bad Request - Invalid ID
 *
 */
router.post("/", (0, express_validator_1.body)("name").notEmpty().withMessage("El campo no puede ir vacío"), (0, express_validator_1.body)("price")
    .isNumeric()
    .withMessage("Valor no valido")
    .notEmpty()
    .withMessage("El campo no puede ir vacío")
    .custom((value) => value > 0)
    .withMessage("El precio debe ser mayor a cero"), middleware_1.InputErrors, product_1.createProduct);
/**
 * @swagger
 * /api/product/{id}:
 *  put:
 *    summary: Edit a product
 *    tags:
 *      - Products
 *    description: Edit a product
 *    parameters:
 *      - in: path
 *        name: id
 *        description: The ID of the product to edit
 *        required: true
 *        schema:
 *          type: integer
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  example: Monitor
 *                price:
 *                  type: number
 *                  example: 399
 *                availability:
 *                  type: boolean
 *                  example: true
 *
 *    responses:
 *      200:
 *        description: Successful Response
 *      404:
 *        description: Miss a parameter
 *      400:
 *        description: Bad Request - Invalid ID
 *
 */
router.put("/:id", (0, express_validator_1.body)("name").notEmpty().withMessage("El campo no puede ir vacío"), (0, express_validator_1.body)("price")
    .isNumeric()
    .withMessage("Valor no valido")
    .notEmpty()
    .withMessage("El campo no puede ir vacío")
    .custom((value) => value > 0)
    .withMessage("El precio debe ser mayor a cero"), (0, express_validator_1.body)("availability").isBoolean().withMessage("Valor no valido"), middleware_1.InputErrors, product_1.ActualizarProduct);
/**
 * @swagger
 * /api/product/{id}:
 *  patch:
 *    summary: Edit availability of a product
 *    tags:
 *      - Products
 *    description: Edit a product's availability
 *    parameters:
 *      - in: path
 *        name: id
 *        description: The ID of the product to edit the availability
 *        required: true
 *        schema:
 *          type: integer
 *
 *    responses:
 *      200:
 *        description: Successful Response
 *      404:
 *        description: Miss a parameter
 *      400:
 *        description: Bad Request - Invalid ID
 *
 */
router.patch("/:id", (0, express_validator_1.param)("id").isInt().withMessage("Id No Valido"), middleware_1.InputErrors, product_1.ActualizarAvailability);
/**
 * @swagger
 * /api/product/{id}:
 *  delete:
 *    summary: Delete a product
 *    tags:
 *      - Products
 *    description:  Delete a product
 *    parameters:
 *      - in: path
 *        name: id
 *        description: The ID of the product to delete
 *        required: true
 *        schema:
 *          type: integer
 *
 *    responses:
 *      200:
 *        description: Successful Response
 *      404:
 *        description: Miss a parameter
 *      400:
 *        description: Bad Request - Invalid ID
 *
 */
router.delete("/:id", product_1.DeleteProduct);
exports.default = router;
//# sourceMappingURL=router.js.map