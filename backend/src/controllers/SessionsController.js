const { sign } = require("jsonwebtoken")
const config = require("../configs/auth.js")

const { compare } = require("bcryptjs")

const knex = require("../database/knex")
const AppError = require("../utils/AppError.js")

class SessionsController {
    async create(request, response) {
        const { email, password } = request.body

        const user = await knex('users').where({ email }).first()

        if(!user) {
            throw new AppError("E-mail e/ou senha não reconhecidos.", 401)
        }

        const passUser = await compare(password, user.password)

        if(!passUser) {
            throw new AppError("E-mail e/ou senha não reconhecidos.", 401)
        }
        
        const { secret, expiresIn } = config.jwt

        const token = sign({}, secret, { 
            subject: String(user.id),
            expiresIn
        })

        return response.json({ user, token })
    }
}

module.exports = SessionsController