const { hash } = require("bcryptjs")
const AppError = require("../utils/AppError")

class UserCreateService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async execute({ name, email, password }) {
        const checkUserExists = await this.userRepository.findByEmail(email)

        if(checkUserExists.length > 0) {
            throw new AppError("Este e-mail já está em uso.")
        }

        const hashedPass = await hash(password, 8)

        const userCreated = await this.userRepository.create({ name, email, password: hashedPass })

        return userCreated
    }
}

module.exports = UserCreateService