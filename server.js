import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import matchesRoutes from './routes/matchesRoutes.js';
import cors from 'cors'

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
const server = 'https://bettting.netlify.app' 
const server2 = 'http://localhost:5173'
const corsOptions = {
    origin: server ,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204,
  };
app.use(cors(corsOptions))

app.use('/api/users', userRoutes);
app.use('/api/matches', matchesRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => console.log(`Server started on port ${port}`));
