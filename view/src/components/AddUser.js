import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddUser = () => {
  const [nama, setName] = useState('');
  const [pangkat, setPangkat] = useState('');
  const [nrp, setNrp] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [tipeRadio, setTipeRadio] = useState('');
  const [noSeri, setNoSeri] = useState('');
  const navigate = useNavigate();

  const suksesAlert = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Berhasil di Simpan!',
      showConfirmButton: false,
      timer: 1700,
    });
  };

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      suksesAlert();
      await axios.post('http://localhost:8000/users', {
        nama,
        pangkat,
        nrp,
        jabatan,
        tipeRadio,
        noSeri,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Nama Lengkap</label>
            <div className="control">
              <input type="text" className="input" onChange={(e) => setName(e.target.value)} value={nama} placeholder="Name" />
            </div>
          </div>

          <div className="field">
            <label className="label">Pangkat</label>
            <div className="control">
              <input type="text" className="input" onChange={(e) => setPangkat(e.target.value)} value={pangkat} placeholder="Pangkat" />
            </div>
          </div>

          <div className="field">
            <label className="label">No NRP</label>
            <div className="control">
              <input type="text" className="input" onChange={(e) => setNrp(e.target.value)} value={nrp} placeholder="No NRP" />
            </div>
          </div>

          <div className="field">
            <label className="label">Jabatan</label>
            <div className="control">
              <input type="text" className="input" onChange={(e) => setJabatan(e.target.value)} value={jabatan} placeholder="Jabatan" />
            </div>
          </div>

          <div className="field">
            <label className="label">Tipe Radio</label>
            <div className="control">
              <input type="text" className="input" onChange={(e) => setTipeRadio(e.target.value)} value={tipeRadio} placeholder="Tipe Radio" />
            </div>
          </div>

          <div className="field">
            <label className="label">No Seri</label>
            <div className="control">
              <input type="text" className="input" onChange={(e) => setNoSeri(e.target.value)} value={noSeri} placeholder="No Serial" />
            </div>
          </div>

          <div className="field">
            <button type="submit" className="button is-success">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
