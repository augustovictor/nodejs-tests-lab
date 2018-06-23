const UsersRepository = require('./repository')


function fetchAllUsers() {
    console.log('Calling actual controller.fetchAllUsers');
    return UsersRepository.getAllUsers()
}

module.exports = {
    fetchAllUsers
}