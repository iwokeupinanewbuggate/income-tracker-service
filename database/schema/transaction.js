const { mongoose, Schema } = require("mongoose");

const transaction = new Schema({
  userId: String,
  category: {
    type: String,
    enum: ["Bill", "Food", "Clothing", "Salaries", "Donation", "Gift", "Lend"],
  },
  transactionTitle: String,
  amount: Number,
  note: String,
  createdAt: { type: Date, default: Date.now() },
  transactionType: {
    type: String,
    enum: ["income", "expense"],
  },
});

const transactionModel = mongoose.model("transaction", transaction);

module.exports = transactionModel;
