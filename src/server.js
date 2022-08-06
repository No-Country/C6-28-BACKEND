import app from './app.js';
import { sequelize } from './database/database.js';

import './models/Project.js';

sequelize.sync({ force: false }).then(() => {
  console.log('Connection has been established successfully.');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
