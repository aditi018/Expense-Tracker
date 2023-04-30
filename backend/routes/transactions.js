const router = require("express").Router();
const { addExpense, getExpense, deleteExpense } = require("../controllers/expense");
const {addIncome, getIncomes, deleteIncome} = require("../controllers/income");
 

router.post("/add_income",addIncome);
router.get("/get_incomes",getIncomes);
router.delete("/delete_income/:id",deleteIncome);
router.post("/add_expense",addExpense);
router.get("/get_expenses",getExpense);
router.delete("/delete_expense/:id",deleteExpense);

module.exports = router;