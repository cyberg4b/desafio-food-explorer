const AppError = require("../utils/AppError")

class DishUpdateService {
    constructor(dishRepository) {
        this.dishRepository = dishRepository
    }

    async execute({ id, title, description, category, price }) {
        const checkDishExists = await this.dishRepository.findById(id)

        if(!checkDishExists) {
            throw new AppError("Este prato não existe.")
        }

        const dishUpdated = await this.dishRepository.update({ id, title, description, category, price })

        return dishUpdated
    }
}

module.exports = DishUpdateService