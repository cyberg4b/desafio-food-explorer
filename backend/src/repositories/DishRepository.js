const knex = require("../database/knex")

class DishRepository {
    async index({ title }) {
        let dishes;

        if(title) {
            dishes = await knex('dishes').whereLike("title", `%${title}%`)
        } else {
            dishes = await knex('dishes').select()
        }

        return dishes
    }

    async findById(id) {
        const dish = await knex('dishes').where({ id }).first()

        return dish
    }

    async findByTitle(title) {
        const dish = await knex('dishes').where({ title })

        return dish
    }

    async create({ title, description, category, price }) {
        const [ dish_id ] = await knex('dishes').insert({ title, description, category, price })

        return { id: dish_id }
    }

    async update({ id, title, description, category, price }) {
        const dish_id = await knex('dishes').where({ id }).update({ title, description, category, price })

        return { id: dish_id }
    }

    async delete({ id }) {
        const dish_id = await knex('dishes').where({ id }).delete()

        return { id: dish_id }
    }
}

module.exports = DishRepository