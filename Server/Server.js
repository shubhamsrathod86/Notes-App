import express from 'express';
import noteRouter from './routes/router.js';
import connectDB from './db/connectDB.js'; 
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express()
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());

//middleware
app.use(cors(
    {
        origin: 'http://localhost:5173' ||'*',
        methods: ["GET", "POST", "PATCH", "DELETE"]
    }
));


app.use('/note', noteRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
