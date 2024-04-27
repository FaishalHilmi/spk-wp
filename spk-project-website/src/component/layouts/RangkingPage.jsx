import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

function RangkingPage() {
  const [rank, setRank] = useState([]);
  const URL = import.meta.env.VITE_REACT_APP_URL;

  const getRank = async () => {
    try {
      const response = await axios.get(`${URL}/hasil/rank`);
      const data = await response.data;
      setRank(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateRank = async () => {
    try {
      await axios.post(`${URL}/hasil/updateRank`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRank();
  }, []);

  return (
    <section className="bg-white text-black flex min-h-[91vh] px-8 py-6">
      {/* sidebar */}

      <Sidebar />
      <div className="text-black font-inter w-full">
        <h1 className="text-3xl font-semibold mb-6">Hasil Rangking</h1>
        <button
          onClick={updateRank}
          className="btn bg-green-600 border-none text-white mb-6"
        >
          Update Data
        </button>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-base text-black">
                <th>Rangking</th>
                <th>Nama</th>
                <th>Vektor V</th>
              </tr>
            </thead>
            <tbody>
              {rank.map((rank, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{rank.nama_mahasiswa}</td>
                  <td>
                    <b>{rank.vektor_v}</b>
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

export default RangkingPage;
