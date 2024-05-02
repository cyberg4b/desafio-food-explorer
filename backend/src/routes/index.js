const { Router } = require("express")

const usersRoutes = require("./users.routes")
const sessionsRoutes = require("./sessions.routes")
const dishesRoutes = require("./dishes.routes")
const ingredientsRoutes = require("./ingredients.routes")
const ordersRoutes = require("./orders.routes")
const favoritesRoutes = require("./favorites.routes")

const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/sessions", sessionsRoutes)
routes.use("/dish", dishesRoutes)
routes.use("/ingredients", ingredientsRoutes)
routes.use("/orders", ordersRoutes)
routes.use("/favorite", favoritesRoutes)

module.exports = routes