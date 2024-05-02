const { Router } = require("express")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const dishesRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const DishesController = require("../controllers/DishesController")
const dishesController = new DishesController()

const DishImageController = require("../controllers/DishImageController")
const dishImageController = new DishImageController()

const ensureAuthenticated = require("../midlewares/ensureAuthenticated")

dishesRoutes.use(ensureAuthenticated)

dishesRoutes.post("/", dishesController.create)
dishesRoutes.put("/:id", dishesController.update)
dishesRoutes.get("/", dishesController.index)
dishesRoutes.get("/:id", dishesController.findById)
dishesRoutes.delete("/:id", dishesController.delete)

dishesRoutes.patch("/:id", upload.single("dish"), dishImageController.update)

module.exports = dishesRoutes