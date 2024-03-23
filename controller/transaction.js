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

const addNewCategory  =  async (req, res) => {
    try {
      const {category}  = req.body;
  console.log(category)
      // Validate the category (ensure it's not empty, etc.)
      if (!category) {
        res.status(400).send({ error: 'Category is required' });

      } else if (category.length < 0 ) {
        res.status(400).send("Category cant be empty")
      }
  
      // Check if the category already exists
      const existingCategory = await transactionModel.findOne({ category });
      if (existingCategory) {
     res.status(400).send({ error: 'Category already exists' });
      }
  
      // Update the Mongoose schema dynamically (not recommended)
      // This is just for demonstration purposes and is not recommended in a production environment
      transactionModel.schema.path('category').enumValues.push(category);
  
      // Respond with success
      res.json({ success: category });
    } catch (error) {
      console.error('Error adding category:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
    
  }


module.exports = { CreateTransaction, GetAll ,addNewCategory}