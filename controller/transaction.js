const transactionModel = require("../database/schema/transaction");

const CreateTransaction = async (req, res) => {
  const body = req.body;

  try {
    const newTransaction = await transactionModel.create(body);
    res.status(200).send(newTransaction);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
};

const GetAll = async (req, res) => {
  try {
    const transactions = await transactionModel.find({});
    res.status(200).send(transactions);
  } catch (err) {
    res.status(500).send("Error");
  }
};

const addNewCategory = async (req, res) => {
  try {
    const { category } = req.body;

    if (!category) {
      return res.status(400).send({ error: "Category is required" });
    } else if (category.length < 0) {
      return res.status(400).send("Category cant be empty");
    }

    const existingCategory = await transactionModel.findOne({ category });
    if (existingCategory) {
      return res.status(400).send({ error: "Category already exists" });
    }

    transactionModel.schema.path("category").enumValues.push(category);

    res.json({ success: category });
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteTransaction = async (req, res) => {
  const transactionId = req.params.transactionId;
  try {
    const transaction = await transactionModel.findByIdAndDelete(transactionId);
    if (transaction) {
      res.status(200).send(transaction.id);
    } else {
      res.status(404).send("Couldn't find the transaction");
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
};

const editTransaction = async (req, res) => {
  const body = req.body;
  const transactionId = req.params.transactionId;
  try {
    const UptadedOne = await transactionModel.findByIdAndUpdate(transactionId, {
      amount: body.amount,
      createdAt: body.date,
      transactionTitle: body.transactionTitle,
      note: body.note,
      category: body.category,
      transactionType: body.transactionType,
    });
    res.status(200).send(UptadedOne);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

const getMyRecords = async (req, res) => {
  const userId = req.params.userId;
  try {
    const myRecords = await transactionModel.find({ userId: userId });
    res.status(200).send(myRecords);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = {
  CreateTransaction,
  GetAll,
  addNewCategory,
  deleteTransaction,
  editTransaction,
  getMyRecords,
};
