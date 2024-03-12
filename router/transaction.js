const { Router } = require("express");
const { GetAll, CreateTransaction } = require("../controller/transaction");

const transactionRoute = Router();

transactionRoute.get("/GetRecords", GetAll);
transactionRoute.post("/CreateTransaction", CreateTransaction);

module.exports = transactionRoute;