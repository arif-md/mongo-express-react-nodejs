const express = require("express");
const productController = require("../controllers/product-controller")

const productRouter = express.Router();

productRouter.route("/add").post(productController.addProduct);
productRouter.route("/list").get(productController.listProducts);
productRouter.route("/:id").delete(productController.deleteProduct);
productRouter.route("/:id").get(productController.findProductById);
productRouter.route("/:id").put(productController.updateProduct);
productRouter.route("/search/:key").get(productController.findProductByCriteria);

module.exports = productRouter;

