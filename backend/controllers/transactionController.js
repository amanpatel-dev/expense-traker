const Transaction = require("../models/Transaction");

//

const addTransaction = async (req, res) => {
  try {
    
    const { amount, type, category, description } = req.body;
    console.log(res);

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

//

const getTransactions = async (req, res) => {
  try {

    const transactions = await Transaction.find().sort({ createdAt: -1 });

    res.status(200).json(transactions);

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// delete by id using the function  findByIdAndDelete();

const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findByIdAndDelete(id);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({ message: "Transaction deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getSummary = async (req, res) => {
  try {
    const transactions = await Transaction.find();

    let income = 0;
    let expense = 0;

    transactions.forEach((t) => {
      if (t.type === "income") {
        income += t.amount;
      } else {
        expense += t.amount;
      }
    });

    const balance = income - expense;

    res.status(200).json({
      totalIncome: income,
      totalExpense: expense,
      balance: balance
    });

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { addTransaction , getTransactions ,deleteTransaction , getSummary };