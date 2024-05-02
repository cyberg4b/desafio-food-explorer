const DishRepository = require("../repositories/DishRepository")
const DishCreateService = require("../services/DishCreateService")
const DishUpdateService = require("../services/DishUpdateService")
const DishGetService = require("../services/DishGetService")
const DishIndexService = require("../services/DishIndexService")
const DishDeleteService = require("../services/DishDeleteService")

class DishesController {
    async create(request, response) {
        const { title, description, category, price } = request.body

        const dishRepository = new DishRepository()
        const dishCreateService = new DishCreateService(dishRepository)

        const dish_id = await dishCreateService.execute({ title, description, category, price })

        return response.status(201).json(dish_id)
    }

    async update(request, response) {
        const id = request.params.id
        const { title, description, category, price } = request.body

        const dishRepository = new DishRepository()
        const dishUpdateService = new DishUpdateService(dishRepository)

        await dishUpdateService.execute({ id, title, description, category, price })

        return response.json()
    }

    async findById(request, response) {
        const { id } = request.params

        const dishRepository = new DishRepository()
        const dishGetService = new DishGetService(dishRepository)

        const dish = await dishGetService.execute({ id })

        return response.json(dish)
    }

    async index(request, response) {
        const { search: title } = request.query

        const dishRepository = new DishRepository()
        const dishIndexService = new DishIndexService(dishRepository)

        const dishes = await dishIndexService.execute({ title })

        return response.json(dishes)
    }

    async delete(request, response) {
        const { id } = request.params

        const dishRepository = new DishRepository()
        const dishDeleteService = new DishDeleteService(dishRepository)

        const deleted = await dishDeleteService.execute({ id })

        return response.json()
    }
}

module.exports = DishesController