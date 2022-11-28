const mongoose = require ('mongoose')
const schema = mongoose.Schema; //creating a schema object

const patientSchema = new schema({
    fullname: {
        type:String,
        required: true
    },
    Age: {
        type:integer,
        required: true
    },
    District: {
        type:String,
        required: true
    },
    DateOfEntry: {
        type:new Date(),
        required: true
    },
    Status: {
        type:String,
        required: true
    }
})

const patient = mongoose.model("patient", patientSchema)
module.exports = patient