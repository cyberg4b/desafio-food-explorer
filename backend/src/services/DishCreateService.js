const AppError = require("../utils/AppError")

class DishCreateService {
    constructor(dishRepository) {
        this.dishRepository = dishRepository
    }

    async execute({ title, description, category, price }) {
        if(!title) {
            throw new AppError("O prato precisa de um Nome para ser criado.")
        }
        
        if(!price) {
            throw new AppError("O prato precisa de um Preço para ser criado.")
        }

        const checkDishExists = await this.dishRepository.findByTitle(title)
        
        if(checkDishExists.length > 0) {
            throw new AppError("Este prato já existe.")
        }

        const dishCreated = await this.dishRepository.create({ title, description, category, price })

        return dishCreated
    }
}

module.exports = DishCreateService