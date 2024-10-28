"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProduct = exports.ActualizarAvailability = exports.ActualizarProduct = exports.getOneProduct = exports.getProduct = exports.createProduct = void 0;
const Product_model_1 = __importDefault(require("../models/Product.model"));
const createProduct = async (req, res) => {
    try {
        const product = await Product_model_1.default.create(req.body);
        res.json({ data: product });
    }
    catch (error) {
        console.log(error);
    }
};
exports.createProduct = createProduct;
const getProduct = async (req, res) => {
    try {
        const products = await Product_model_1.default.findAll();
        res.json({ data: products });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getProduct = getProduct;
const getOneProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product_model_1.default.findByPk(id);
        if (!product) {
            return res.status(404).json({
                error: "Producto no encontrado",
            });
        }
        res.json({ data: product });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getOneProduct = getOneProduct;
const ActualizarProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product_model_1.default.findByPk(id);
        if (!product) {
            return res.status(404).json({
                error: "Producto no encontrado",
            });
        }
        await product.update(req.body);
        await product.save();
        res.json({ data: product });
    }
    catch (error) {
        console.log(error);
    }
};
exports.ActualizarProduct = ActualizarProduct;
const ActualizarAvailability = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product_model_1.default.findByPk(id);
        if (!product) {
            return res.status(404).json({
                error: "Producto no encontrado",
            });
        }
        product.availability = !product.dataValues.availability;
        await product.save();
        res.json({ data: product });
    }
    catch (error) {
        console.log(error);
    }
};
exports.ActualizarAvailability = ActualizarAvailability;
const DeleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product_model_1.default.findByPk(id);
        if (!product) {
            return res.status(404).json({
                error: "Producto no encontrado",
            });
        }
        await product.destroy();
        res.json({ data: "Producto eliminado exitosamente" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.DeleteProduct = DeleteProduct;
//# sourceMappingURL=product.js.map