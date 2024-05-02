const AppError = require("../utils/AppError")

class DishGetService {
    constructor(dishRepository) {
        this.dishRepository = dishRepository
    }

    async execute({ id }) {
        const findedDish = await this.dishRepository.findById(id)

        if(!findedDish) {
            throw new AppError("Este prato não existe.")
        }

        return findedDish
    }
}

module.exports = DishGetService