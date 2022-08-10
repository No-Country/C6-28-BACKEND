import express from 'express';
import morgan from 'morgan';
import UserRoute from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the API for No-Country' });
});

app.use('/api/v1/users', UserRoute);

export default app;
