const { Router } = require("express");
const {
  GetAll,
  CreateTransaction,
  addNewCategory,
  deleteTransaction,
  editTransaction,
  getMyRecords,
} = require("../controller/transaction");

const transactionRoute = Router();

transactionRoute.get("/GetRecords", GetAll);
transactionRoute.post("/CreateTransaction", CreateTransaction);
transactionRoute.post("/addNewCategory", addNewCategory);
transactionRoute.delete("/deleteTransaction/:transactionId", deleteTransaction);
transactionRoute.put("/editTransaction/:transactionId", editTransaction);
transactionRoute.get("/getMyRecords/:userId", getMyRecords);

module.exports = transactionRoute;
