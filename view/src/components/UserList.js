import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import '../styles/userlist.css';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:8000/users');
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="columns mt-6 is-centered">
      <div className="column is-centered">
        <Link to={`/`} className="button is-success">
          back home{' '}
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Lengkap</th>
              <th>Pangkat</th>
              <th>NRP</th>
              <th>Jabatan</th>
              <th>Tipe Radio</th>
              <th>No Serial</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.nama}</td>
                <td>{user.pangkat}</td>
                <td>{user.nrp}</td>
                <td>{user.jabatan}</td>
                <td>{user.tipeRadio}</td>
                <td>{user.noSeri}</td>
                <td>
                  <Link to={`/edit/${user.id}`} className="button is-small is-info">
                    Edit
                  </Link>
                  <button onClick={() => deleteUser(user.id)} className="button is-small is-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
