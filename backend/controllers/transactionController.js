const Transaction = require("../models/Transaction");

const addTransaction = async (req, res) => {
  try {
    
    const { amount, type, category, description } = req.body;
    console.log(req.body);

    const transaction = new Transaction({
      amount,
      type,
      category,
      description
    });

    const savedTransaction = await transaction.save();

    res.status(201).json(savedTransaction);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getTransactions = async (req, res) => {
  try {

    const transactions = await Transaction.find().sort({ createdAt: -1 });

    res.status(200).json(transactions);

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { addTransaction , getTransactions };