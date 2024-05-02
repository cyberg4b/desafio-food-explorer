const AppError = require("../utils/AppError")

class DishDeleteService {
    constructor(dishRepository) {
        this.dishRepository = dishRepository
    }

    async execute({ id }) {
        const dishCreated = await this.dishRepository.delete({ id })

        return dishCreated
    }
}

module.exports = DishDeleteService