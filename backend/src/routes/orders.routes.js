const { Router } = require("express")

const ordersRoutes = Router()

const OrdersController = require("../controllers/OrdersController")
const ordersController = new OrdersController()

ordersRoutes.post("/", ordersController.create)
ordersRoutes.get("/:user_id", ordersController.index)
ordersRoutes.get("/", ordersController.findByUserAndDishId)
ordersRoutes.delete("/", ordersController.delete)

module.exports = ordersRoutes