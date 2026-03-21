const express = require("express");
const router = express.Router();

const { addTransaction,getTransactions ,deleteTransaction,getSummary} = require("../controllers/transactionController");

router.post("/", addTransaction);
router.get("/", getTransactions);
router.get("/summary",getSummary);

router.delete("/:id", deleteTransaction);

module.exports = router;