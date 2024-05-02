const { Router } = require("express")

const ingredientsRoutes = Router()

const IngredientsController = require("../controllers/IngredientsController")
const ingredientsController = new IngredientsController()

ingredientsRoutes.post("/", ingredientsController.create)
ingredientsRoutes.get("/", ingredientsController.index)
ingredientsRoutes.delete("/:id", ingredientsController.delete)

module.exports = ingredientsRoutes