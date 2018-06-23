const UsersRepository = require('./repository')


function fetchAllUsers() {
    return UsersRepository.getAllUsers()
}

module.exports = {
    fetchAllUsers
}