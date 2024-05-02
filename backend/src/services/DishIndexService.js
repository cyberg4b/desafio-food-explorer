const AppError = require("../utils/AppError")

class DishIndexService {
    constructor(dishRepository) {
        this.dishRepository = dishRepository
    }

    async execute({ title }) {
        const findedDishes = await this.dishRepository.index({ title })

        return findedDishes
    }
}

module.exports = DishIndexService