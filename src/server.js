import app from './app.js';
import { sequelize } from './database/database.js';



sequelize.sync({ force: false }).then(() => {
  console.log('✓ Se conectó a la base de datos');
});

app.listen(3000, () => {
  console.log('✓ Servidor corriendo en el puerto 3000');
});
