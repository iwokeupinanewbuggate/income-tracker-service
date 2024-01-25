const Router = require("express")
const { createUser } = require("../controller/userController")

const userRouter = Router()
userRouter.post("/users", createUser)

module.exports = userRouter