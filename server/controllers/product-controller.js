const Product = require("../models/product");

const addProduct = async (req, resp) => {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
}

const listProducts = async (req, resp) => {
    const products = await Product.find();
    if (products.length > 0) {
        resp.send(products)
    } else {
        resp.send({ result: "No Product found" })
    }
}

const deleteProduct = async (req, resp) => {
    let result = await Product.deleteOne({ _id: req.params.id });
    resp.send(result)
}

const findProductById = async (req, resp) => {
    let result = await Product.findOne({ _id: req.params.id })
    if (result) {
        resp.send(result)
    } else {
        resp.send({ "result": "No Record Found." })
    }
}

const updateProduct = async (req, resp) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    resp.send(result)
}

const findProductByCriteria = async (req, resp) => {
    let result = await Product.find({
        "$or": [
            {
                name: { $regex: req.params.key }  
            },
            {
                company: { $regex: req.params.key }
            },
            {
                category: { $regex: req.params.key }
            }
        ]
    });
    resp.send(result);
}

module.exports = {
    addProduct,
    listProducts,
    deleteProduct,
    findProductById,
    updateProduct,
    findProductByCriteria
}
