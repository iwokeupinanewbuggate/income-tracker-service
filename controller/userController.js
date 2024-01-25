const { userModel } = require("../database/schema/userschema")

const createUser = async (req, res) => {
    const body = req.body
    console.log(body)
    try {
        const user = await userModel.create(body)
        console.log(user)
        res.status(201).send({ success: true })
    } catch (err) {
        console.log(err)
        res.status(500).send("Server error")
    }
}



module.exports = { createUser }