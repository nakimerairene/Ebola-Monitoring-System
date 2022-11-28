const mongoose = require ('mongoose')
const schema = mongoose.Schema; //creating a schema object

const userSchema = new schema({
    username: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    role: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    confirmPassword: {
        type:String,
        required: true
    }
})

const user = mongoose.model("users", userSchema)
module.exports = user