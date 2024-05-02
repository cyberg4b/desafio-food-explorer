const knex = require("../database/knex")

class FavoritesController {
    async create(request, response) {
        const { user_id, dish_id } = request.body

        const favorite = await knex("favorites").insert({ user_id, dish_id })

        return response.status(201).send(favorite)
    }

    async findByUserAndDishId(request, response) {
        const { user_id, dish_id } = request.query
        let favorite

        if(user_id && dish_id) {
            favorite = await knex("favorites").where({ user_id, dish_id }).first()
        }

        return response.json(favorite)
    }

    async delete(request, response) {
        const { dish_id } = request.params

        await knex("favorites").where({ dish_id }).delete()

        return response.send()
    }
}

module.exports = FavoritesController