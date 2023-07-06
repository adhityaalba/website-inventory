// import { Sequelize } from 'sequelize';
import User from '../models/UserModel.js';

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: {
        include: ['id', 'nama', 'pangkat', 'nrp', 'jabatan', 'tipeRadio', 'noSeri'],
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUsersbyId = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: 'User Berhasil Disimpan' });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'User Berhasil Ter-update' });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'User Berhasil Ter-hapus' });
  } catch (error) {
    console.log(error.message);
  }
};
