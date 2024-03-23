const { Router } = require("express");
const { GetAll, CreateTransaction, addNewCategory } = require("../controller/transaction");

const transactionRoute = Router();

transactionRoute.get("/GetRecords", GetAll);
transactionRoute.post("/CreateTransaction", CreateTransaction);
transactionRoute.post("/addNewCategory",addNewCategory)

module.exports = transactionRoute;