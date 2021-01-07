const mongoose = require('mongoose');

const Tasks = mongoose.model('Tasks', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    
    completed: {
        type: Boolean,
        default: false
    }
});

const task = new Tasks({
    description: 'kgfdfghjklt',
    completed: false
});

task.save().then(() => {
    console.log(task);
}).catch((error) => {
    console.log('Error', error);
});

module.exports = Tasks;
