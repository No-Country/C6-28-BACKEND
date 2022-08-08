import express from 'express';
import morgan from 'morgan';
import User from './models/UserModel.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.get('/users', (req, res) => {
  User.findAll().then((users) => {
    res.json(users);
  });
});

app.post('/users', (req, res) => {
  const { nombre, apellidos, email, password, confirmarPassword } = req.body;

  User.create({
    nombre,
    apellidos,
    email,
    password,
    confirmarPassword,
  }).then((user) => {
    res.status(200).json(user);
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({
    where: {
      email,
      password,
    },
  }).then((user) => {
    res.status(200).json(user.nombre);
  });
})


app.get('/users/:id', (req, res) => {
  const { id } = req.params;

  User.findByPk(id).then((user) => {
    res.json(user);
  });
})

export default app;
