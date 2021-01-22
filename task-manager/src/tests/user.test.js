const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const { use } = require('../src/app')
const app = require('../src/app')
const User = require('../src/models/user')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Tae',
    email: 'BTS@army.com',
    password: '12345qw',
    tokens: [{
        token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
    }]
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should  signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name: "Blue",
        email: "blue@gmail.com",
        password: "Mypass0707"
    }).expect(201)

    //Assert the database was changed correctly

    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    //Assertions about the response
    expect(response.body).toMathObject({
        user: {
            name: 'Tae',
            email: 'BTS@army.com'
        },
        token: user.tokens[0].token
    })
    expect(user.password).not.toBe('12345qw')
})

test ('Should login existing user', async() => {
    const response = await (await request(app).post('/users/login')).send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)

    const user = await User.findById(userOne._id)
    expect(response.body.tokens).toBe(user.tokens[1].token)
})

test ('Should not login non-existent user', async() => {
    await (await request(app).post('/users/login')).send({
        email: userOne.email,
        password: 'thisisnotmypass'
    }).expect(400)
})

test('Should get profile for user', async() => {
    await request(app).get('/users/me').set('Authorization', `Bearer $(userOne.tokens[0].token}`).send().expect(200)
})

test('Should not get profile for unauthenticated user', async() => {
    await request(app).get('/users/me').send().expect(401)
})

test('Should delete account for user', async() => {
    await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer $(userOne.tokens[0].token}`)
    .send().expect(200)
    const user = await User.findById(userOne._id)
    expect(user).toBeNull()
})

test('Should not delete account for unauthenticated user', async() => {
    await request(app).delete('/users/me').send().expect(401)
})

test('Should upload avatar image', async() => {
    await (await request(app).post('/users/me/avatar')).set('Authorization', `Bearer $(userOne.tokens[0].token}`).attach('avatar', 'tests/fixtures/profile-pic.jpg').expect(200)
    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})
