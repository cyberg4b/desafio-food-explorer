const { Router } = require("express")

const FavoritesController = require("../controllers/FavoritesController")
const favoritesController = new FavoritesController()
const ensureAuthenticated = require("../midlewares/ensureAuthenticated")

const favoritesRoutes = Router()

favoritesRoutes.use(ensureAuthenticated)

favoritesRoutes.post("/", favoritesController.create)
favoritesRoutes.get("/", favoritesController.findByUserAndDishId)
favoritesRoutes.delete("/:dish_id", favoritesController.delete)

module.exports = favoritesRoutes