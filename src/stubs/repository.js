class UsersRepository {

    static async getAllUsers() {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve([
                    { name: 'u1' },
                    { name: 'u2' },
                    { name: 'u3' },
                    { name: 'u4' },
                    { name: 'u5' },
                ])
            }, 1000);
        })
    }
}

module.exports = UsersRepository