const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const connectDB = require('./database/db');
const userRouter = require('./routes/admin.routes');

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan('dev'));

const port = process.env.PORT || 4500

app.get('/', (req, res) => {
    res.send('Welcome To Kwilox Relaxation Center.')
});

app.use('/api/v1/user', userRouter)

app.listen(port, async () =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        console.log('Connected to MongoDB');
        console.log(`Server is listening on ${port}`);
    } catch (error) {
        console.log("Error connecting to MongoDB: " + error.message);
    }
})