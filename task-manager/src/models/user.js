const mongoose = require('mongoose');
const { default: validator } = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password should contain more than 6 characters');
            }
        }
    },
    age: {
        type: Number,
        default: true,
        validate(value) {
            if(value < 0){
                throw new Error('Age must be postive number');
            }
        }
    }
})

const me = new User({
    name: 'Bangieeee',
    email: 'btssss@army.co',
    password: 'btsbtsbg',
    age: 30
})

me.save().then(() =>{
    console.log(me);
}).catch((error) =>{
    console.log('Error', error);
});

module.exports = User;
