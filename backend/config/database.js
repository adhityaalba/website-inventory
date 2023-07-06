import { Sequelize } from 'sequelize';

const db = new Sequelize('inventori_ht', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '+07:00',
});

export default db;
