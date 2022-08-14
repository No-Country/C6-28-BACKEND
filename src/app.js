import express from 'express';
import morgan from 'morgan';
import UserRoute from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('docs'));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.use('/api/v1/users', UserRoute);

export default app;
