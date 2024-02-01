const Router = require("express")
const { createUser, loginUser } = require("../controller/userController")
const { userModel } = require("../database/schema/userschema")
const bcrypt = require("bcrypt")

const emailValidation = async (req, res, next) => {
    const body = req.body;
    const Users = await userModel.findOne({ email: body.email })
    try {
        if (Users) {
            res.status(400).send({ message: "Email already in use" })
        } else {
            next()
        }
    } catch (err) {
        res.status(500).send("Server error")
    }

}

const passCheck = async (req, res, next) => {
    const body = req.body
    const user = await userModel.findOne({ email: body.email })
    console.log(user)
    try {
        if (user) {
            const passchecker = bcrypt.compareSync(body.password, user.password)
            console.log(passchecker)
            if (passchecker) {
                next()
            } else {
                res.status(400).send("Password is incorrect")
            }
        } else {
            res.status(404).send("Account not found")
        }
    } catch (err) {
        res.status(500).send("Server error")
    }

}
const userRouter = Router()
userRouter.post("/users", emailValidation, createUser)
userRouter.post("/user", passCheck, loginUser)

module.exports = userRouter