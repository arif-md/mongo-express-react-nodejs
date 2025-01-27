const { Router: expressRouter } = require("express");
const router = expressRouter();

// routers
const authRouter = require("./auth-routes");
const productRouter = require("./product-routes");

// map rotuers
router.use("/auth", authRouter);
router.use("/product", productRouter);

module.exports = router;