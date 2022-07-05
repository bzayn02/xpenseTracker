import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000;

// Setup middlewares
import morgan from 'morgan';
import cors from 'cors';
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

// DB connection
import { dbConnection } from './src/config/db.js';
dbConnection();

// APIs
import userRouter from './src/routers/userRouter.js';
app.use('/api/v1/users', userRouter);

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 NOT FOUND</h1>');
});
app.listen(PORT, (error) => {
    error && console.log(error);
    console.log(`Server is running at ${PORT}`);
});
