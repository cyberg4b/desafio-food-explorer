const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class OrdersController {
    async create(request, response) {
        const { quantity, user_id, dish_id } = request.body

        const checkOrderExist = await knex('orders').where({ user_id, dish_id }).first()

        if(checkOrderExist) {
            await knex('orders').where({ user_id, dish_id }).update({ quantity })
        } else {
            await knex('orders').insert({ quantity, user_id, dish_id })
        }

        return response.json()
    }
    
    // Retorna todas as Orders de um determinado usuário
    async index(request, response) {
        const { user_id } = request.params

        const orders = await knex('orders').where({ user_id })

        const formatedOrders = orders.map(order => {
            return {
                quantity: order.quantity,
                user_id: order.user_id,
                dish_id: order.dish_id,
            }
        })

        return response.json(formatedOrders)
    }

    // Retorna uma Order específica de um determinado usuário
    async findByUserAndDishId(request, response) {
        const { user_id, dish_id } = request.query

        const order = await knex('orders').where({ user_id, dish_id }).first()

        if(!order) { 
            throw new AppError("Pedido não encontrado")
        }

        return response.json(order)
    }
    
    async delete(request, response) {
        const { user_id, dish_id } = request.query

        await knex('orders').where({ user_id, dish_id }).delete()

        return response.json()
    }
}

module.exports = OrdersController