const knex = require("../database/knex")
const DiskStorage = require("../providers/DiskStorage")

class DishImageController {
    async update(request, response) {
        const id = request.params.id
        const imageFileName = request.file.filename

        const diskStorage = new DiskStorage()

        const dish = await knex("dishes").where({ id }).first()

        if(dish.image) {
            await diskStorage.deleteFile(dish.image)
        }

        const filename = await diskStorage.saveFile(imageFileName)
        dish.image = filename

        await knex("dishes").where({ id }).update(dish)

        return response.json(dish)
    }
}

module.exports = DishImageController