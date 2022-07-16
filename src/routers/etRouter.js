import express from 'express';
import {
    createExpense,
    deleteExpense,
    getExpenses,
} from '../model/expenseModel/Expense.Model.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const { authorization } = req.headers;
        // Model get all expenses of userID == authorization
        const expenses = await getExpenses({ userID: authorization });
        res.json({
            status: 'success',
            expenses,
        });
    } catch (error) {
        res.json({
            status: 'error',
            message: error.message,
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const { authorization } = req.headers;

        const result = await createExpense({
            ...req.body,
            userID: authorization,
        });
        result?._id
            ? res.json({
                  status: 'success',
                  message: 'New expense added successfully!',
              })
            : res.json({
                  status: 'error',
                  message: 'Error creating expense, please try again later!',
              });
    } catch (error) {
        res.json({
            status: 'error',
            message: error.message,
        });
    }
});

router.delete('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const { authorization } = req.headers;

        const data = await deleteExpense({
            _id,
            userID: authorization,
        });
        data?._id
            ? res.json({
                  status: 'success',
                  message: 'Expense deleted successfully!',
              })
            : res.json({
                  status: 'error',
                  message: 'Expense delete failed!',
              });
    } catch (error) {
        console.log(error.message);
        res.json({
            status: 'error',
            message: error.message,
        });
    }
});

export default router;
