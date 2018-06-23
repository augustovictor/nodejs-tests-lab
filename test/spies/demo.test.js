const { expect } = require('chai')
const sinon = require('sinon')

const controller = require('../../src/stubs')
const UsersRepository = require('../../src/stubs/repository')
const mockUsers = [
    { name: 'mocku1' },
    { name: 'mocku2' },
]



describe('STUBS', () => {
    const sandbox = sinon.sandbox.create()
    const fakeUsersRepository = {
        getAllUsers: () => Promise.resolve(mockUsers)
    }
    beforeEach(() => {
        sandbox.stub(UsersRepository, 'getAllUsers').returns(mockUsers)
        // sinon.stub(UsersRepository, 'getAllUsers')
        // .yields(undefined, {}, mockUsers)
    })
    
    afterEach(() => {
        // UsersRepository.restore()
        sandbox.restore()
    })
    
    it('should test with stub', () => {
        const result = UsersRepository.getAllUsers()
        expect(result[0].name).to.equal(mockUsers[0].name)
        
    })
})

describe('WITHOUT STUB', () => {
    it('should test without stub', async () => {
        const actualUsers = [
            { name: 'u1' },
            { name: 'u2' },
            { name: 'u3' },
            { name: 'u4' },
            { name: 'u5' },
        ]
        const allUsers = await UsersRepository.getAllUsers()
        expect(allUsers[0].name).to.equal(actualUsers[0].name)
    })
})
