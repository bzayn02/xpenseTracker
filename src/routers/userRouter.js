import express from 'express';
import { createUser, findUser } from '../model/userModel/User.Model.js';

const router = express.Router();

router.all('/', (req, res, next) => {
    console.log('user router got hit');
    next();
});

// Get user
router.get('/', (req, res) => {
    res.send('get user');
});

// Create a user
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const result = await createUser(req.body);
        result?._id
            ? res.json({
                  status: 'success',
                  message: 'User registered successfully!',
              })
            : res.json({
                  status: 'error',
                  message: 'User registration failed!',
              });
    } catch (error) {
        let message = error.message;
        if (error.message.includes('E11000 duplicate key error collection')) {
            message = 'User already exists, please try another one.';
        }
        res.json({
            status: 'error',
            message,
        });
    }
});

// Login user
router.post('/login', async (req, res) => {
    try {
        const user = await findUser(req.body);
        user?._id
            ? res.json({
                  status: 'success',
                  user,
              })
            : res.json({
                  status: 'error',
                  message: 'Invalid login credentials.',
              });
        console.log(user);
    } catch (error) {
        console.log(error);
        res.json({
            status: 'error',
            message: error.message,
        });
    }
});
export default router;
