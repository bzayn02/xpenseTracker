import ExpenseSchema from './Expense.Schema.js';

// CRUD

// @expense should be an object
export const createExpense = (expense) => {
    return ExpenseSchema.create(expense);
};

// get expense
// @filter must be an object, that should at least contain the userID.
export const getExpenses = (filter) => {
    return ExpenseSchema.find(filter);
};

// delete expense
// @filter must be an object, that should at least contain the userID and expenseID.
export const deleteExpense = (filter) => {
    return ExpenseSchema.findOneAndDelete(filter);
};
