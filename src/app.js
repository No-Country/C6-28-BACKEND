import express from 'express';
import morgan from 'morgan';
import UserRoute from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/api/v1', UserRoute);

export default app;
