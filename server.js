import express from 'express';

const app = express();

const PORT = process.env.PORT || 8000;

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 NOT FOUND</h1>');
});
app.listen(PORT, (error) => {
    error && console.log(error);
    console.log(`Server is running at ${PORT}`);
});
