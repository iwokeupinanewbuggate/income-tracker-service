const { userModel } = require("../database/schema/userschema")
const bcrypt = require("bcrypt")

const createUser = async (req, res) => {
    const data = req.body
    const pass = req.body.password
    const protectedPass = bcrypt.hashSync(pass, 10)
    const userInfo = { ...data, password: protectedPass }
    console.log(userInfo)
    try {
        const user = await userModel.create(userInfo)
        res.status(201).send({ success: true, user })
    } catch (err) {
        console.log(err)
        res.status(500).send("Server error")
    }
}

const loginUser = async (req, res) => {
    const body = req.body
    const user = await userModel.findOne({ email: body.email })
    try {
        if (user) {
            res.status(200).send({ success: true, user })
        } else {
            res.status(404).send("User not found")
        }
    } catch (err) {
        res.status(500).send("Server error")
    }
}




module.exports = { createUser, loginUser }