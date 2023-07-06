import { Sequelize } from 'sequelize';

import db from '../config/database.js';

const { DataTypes } = Sequelize; //DataType fungsi dari sequelize
const User = db.define(
  'users',
  {
    nama: DataTypes.STRING,
    pangkat: DataTypes.STRING,
    nrp: DataTypes.INTEGER,

    jabatan: DataTypes.STRING,
    tipeRadio: DataTypes.STRING,
    noSeri: DataTypes.STRING,
  },

  {
    createdAt: false,
    updatedAt: false,
  }
);

export default User;

(async () => {
  await db.sync();
})();
