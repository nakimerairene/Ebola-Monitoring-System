const express = require ('express')
const router = express.Router()
const userSchema= require('../Models/userSchema') //importing the userSchema file

router.post('/users', async (req,res)=>{
    const user = req.body
    const userInfo = new userSchema(user)
    try {
        await userInfo.save()
        return res.status(201).send(userInfo)
    } catch (error) {
        // res.status(400).send(error)
        console.log(error);
    }
})

module.exports = router //exporting the router file