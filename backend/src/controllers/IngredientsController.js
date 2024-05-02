const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class IngredientsController {
    async create(request, response) {
        const { name, dish_id } = request.body

        const ingredientExists = await knex('ingredients').where({ name, dish_id }).first()

        if(ingredientExists) {
            throw new AppError("Não é possivel adicionar dois ou mais ingredientes iguais no mesmo prato.")
        }

        await knex('ingredients').insert({ name, dish_id })

        return response.status(201).json()
    }

    async index(request, response) {
        const { dish } = request.query
        let ingredients

        if(dish) {
            ingredients = await knex('ingredients').where({ dish_id: dish }).select()
        } else {
            ingredients = await knex('ingredients').select()
        }

        const filteredIngredients = ingredients.map(elem => {
            return {
                id: elem.id,
                name: elem.name,
                dish_id: elem.dish_id
            }
        })

        return response.json(filteredIngredients)
    }

    async delete(request, response) {
        const id = request.params.id
        
        const ingredientExists = await knex('ingredients').where({ id }).first()
        
        if(!ingredientExists) {
            throw new AppError("Erro: Não é possivel deletar um ingrediente que não existe.")
        }

        await knex('ingredients').where({ id }).delete()

        return response.json()
    }
}

module.exports = IngredientsController