import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const URL = import.meta.env.VITE_REACT_APP_URL;

  const deleteMahasiswa = async (id) => {
    try {
      await axios.delete(`${URL}/mahasiswa/${id}`);
      document.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const getAllMahasiswa = async () => {
    try {
      const result = await axios.get(`${URL}/mahasiswa`);
      const data = await result.data;
      setMahasiswa(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMahasiswa();
  }, []);

  return (
    <section className="bg-white text-black flex min-h-[91vh] px-8 py-6">
      {/* sidebar */}
      <Sidebar />
      <div className="text-black font-inter w-full">
        <h1 className="text-3xl font-semibold mb-6">Data Mahasiswa</h1>
        <Link
          to="/tambah-mahasiswa"
          className="btn bg-green-600 border-none text-white mb-6"
        >
          Tambah Data
        </Link>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-base text-black">
                <th>No</th>
                <th>Nama</th>
                <th>Kelas</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mahasiswa.map((mahasiswa, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{mahasiswa.nama_mahasiswa}</td>
                  <td>{mahasiswa.kelas.toUpperCase()}</td>
                  <td>
                    <div className="button text-white flex gap-2">
                      <Link
                        to={`detail-mahasiswa/${mahasiswa.id_mahasiswa}`}
                        className="px-4 py-2 rounded-md bg-blue-800"
                      >
                        Detail
                      </Link>
                      <button
                        className="px-4 py-2 rounded-md bg-red-800"
                        onClick={() => deleteMahasiswa(mahasiswa.id_mahasiswa)}
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Home;
