import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";

function PerhitunganPage() {
  const [hasil, setHasil] = useState([]);
  const URL = import.meta.env.VITE_REACT_APP_URL;

  const deleteMahasiswa = async (id) => {
    try {
      await axios.delete(`${URL}/mahasiswa/${id}`);
      document.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const getHasil = async () => {
    try {
      const response = await axios.get(`${URL}/hasil`);
      const data = await response.data;
      setHasil(data.data);
    } catch (errors) {
      console.log(errors);
    }
  };

  useEffect(() => {
    getHasil();
  }, []);

  return (
    <section className="bg-white text-black flex min-h-[91vh] px-8 py-6">
      {/* sidebar */}
      <Sidebar />
      <div className="text-black font-inter w-full">
        <h1 className="text-3xl font-semibold mb-6">Perhitungan WP</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-base text-black">
                <th>No</th>
                <th>Nama</th>
                <th>C1</th>
                <th>C2</th>
                <th>C3</th>
                <th>C4</th>
                <th>C5</th>
                <th>C6</th>
                <th>Vektor S</th>
              </tr>
            </thead>
            <tbody>
              {hasil.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.nama_mahasiswa}</td>
                  <td>{item.nilai_1}</td>
                  <td>{item.nilai_2}</td>
                  <td>{item.nilai_3}</td>
                  <td>{item.nilai_4}</td>
                  <td>{item.nilai_5}</td>
                  <td>{item.nilai_6}</td>
                  <th>{item.hasil_vektor}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default PerhitunganPage;
