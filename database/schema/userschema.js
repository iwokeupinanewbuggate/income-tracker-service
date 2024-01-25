const { model, Schema } = require("mongoose")

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    avatar_img: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
    uptatedAt: { type: Date, default: Date.UTC },
    currency_type: { type: String, default: "" },
})

const userModel = model("users", userSchema)

module.exports = { userModel }