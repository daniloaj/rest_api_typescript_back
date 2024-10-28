import { Request, Response } from "express";
import Product from "../models/Product.model";
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};
export const getProduct = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json({ data: products });
  } catch (error) {
    console.log(error);
  }
};
export const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({
        error: "Producto no encontrado",
      });
    }
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};
export const ActualizarProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({
        error: "Producto no encontrado",
      });
    }
    await product.update(req.body);
    await product.save();
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};
export const ActualizarAvailability = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({
        error: "Producto no encontrado",
      });
    }
    product.availability=!product.dataValues.availability
    
    await product.save();
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};
export const DeleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({
        error: "Producto no encontrado",
      });
    }
    await product.destroy();
    res.json({ data: "Producto eliminado exitosamente" });
  } catch (error) {
    console.log(error);
  }
};
