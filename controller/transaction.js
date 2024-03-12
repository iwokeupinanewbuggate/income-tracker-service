const transactionModel = require("../database/schema/transaction")

const CreateTransaction = async (req, res) => {
    const body = req.body

    try {
        const newTransaction = await transactionModel.create(body)

        console.log({ newTransaction })
        res.status(200).send(newTransaction)
    } catch (err) {

        console.log(err)
        res.status(500).send("Error")
    }
}

const GetAll = async (req, res) => {
    try {
        const transactions = await transactionModel.find({})
        res.status(200).send(transactions)
    } catch (err) {
        res.status(500).send("Error")
    }
}
module.exports = { CreateTransaction, GetAll }