import express from 'express';
import morgan from 'morgan';
import UserRoute from './routes/userRoutes.js';
import rateLimit from 'express-rate-limit';



const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('docs'));

// Enable cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.sendFile('index.html');
});
export const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 minute
  max: 100, // 
  message:"excediste el número maximo de intentos",
  standardHeaders: true,
  legacyHeaders:false
});

app.use('/api/v1/users',limiter, UserRoute);


export default app;
