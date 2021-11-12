

export default class UserService {
    constructor(logger) {
        this.logger = logger
        this.users = []
    }

    add(user) {
        this.users.push(user)
        this.logger.log("User Add Operation Called By Poul Tylon")
        console.log("User Added ", user)
    }

    list() {
        console.log("Users Listed")
        this.logger.log("User List Operation Called By Poul Tylon")
        return this.users;

    }

    getById(id) {
        let requestedUser = this.users.find(x => x.id === id)
        this.logger.log(`User Get(${id}) Operation Called By Poul Tylon`)
        console.log(" User Found")
        return requestedUser
    }
}