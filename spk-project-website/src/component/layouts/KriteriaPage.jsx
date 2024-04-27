import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

function KriteriaPage() {
  const [kriteria, setKriteria] = useState([]);
  const URL = import.meta.env.VITE_REACT_APP_URL;

  const deleteKriteria = async (id) => {
    try {
      await axios.delete(`${URL}/kriteria/${id}`);
      document.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const getAllKriteria = async () => {
    try {
      const response = await axios.get(`${URL}/kriteria`);
      const data = await response.data;
      setKriteria(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllKriteria();
  }, []);

  return (
    <section className="bg-white text-black flex min-h-[91vh] px-8 py-6">
      {/* sidebar */}
      <Sidebar />
      <div className="text-black font-inter w-full">
        <h1 className="text-3xl font-semibold mb-6">Kriteria</h1>
        <Link
          to="/tambah-kriteria"
          className="btn bg-green-600 border-none text-white mb-6"
        >
          Tambah Kriteria
        </Link>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-base text-black">
                <th>Kode Kriteria</th>
                <th>Nama Kriteria</th>
                <th>Nilai Bobot</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {kriteria.map((item) => (
                <tr key={item.id_kriteria}>
                  <th>{item.kode_kriteria}</th>
                  <td>{item.nama_kriteria}</td>
                  <td>{item.bobot}</td>
                  <td>
                    <div className="button text-white flex gap-2">
                      <button
                        className="px-4 py-2 rounded-md bg-red-800"
                        onClick={() => deleteKriteria(item.id_kriteria)}
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

export default KriteriaPage;
