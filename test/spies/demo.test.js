const { expect } = require('chai')
const sinon = require('sinon')

const controller = require('../../src/stubs')
const UsersRepository = require('../../src/stubs/repository')

const mockUsers = [
    { name: 'mocku1' },
    { name: 'mocku2' },
]



describe('STUBS', () => {
    it('should test with stub', async () => {
        const sandbox = sinon.createSandbox()
        sandbox.stub(UsersRepository, 'getAllUsers').returns(Promise.resolve(mockUsers))
        
        const result = await controller.fetchAllUsers()
        expect(result[0].name).to.equal(mockUsers[0].name)
        sandbox.restore()
        
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
        const allUsers = await controller.fetchAllUsers()
        expect(allUsers[0].name).to.equal(actualUsers[0].name)
    })
})
