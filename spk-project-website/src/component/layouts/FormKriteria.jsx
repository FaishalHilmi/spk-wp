import React, { useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormKriteria() {
  const navigate = useNavigate();
  const [kodeKriteria, setKodeKriteria] = useState("");
  const [namaKriteria, setNamaKriteria] = useState("");
  const [nilaiBobot, setNilaiBobot] = useState();

  const changeKodeKriteria = (kode) => {
    setKodeKriteria(kode.target.value);
  };

  const changeNamaKriteria = (nama) => {
    setNamaKriteria(nama.target.value);
  };

  const changeNilaiBobot = (nilai) => {
    setNilaiBobot(nilai.target.value);
  };

  const handleCreateKriteria = async (event) => {
    event.preventDefault();
    const URL = import.meta.env.VITE_REACT_APP_URL;

    try {
      await axios.post(`${URL}/kriteria`, {
        kode_kriteria: kodeKriteria,
        nama_kriteria: namaKriteria,
        bobot: nilaiBobot,
      });

      navigate("/kriteria");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-white text-black flex min-h-[91vh] px-8 py-6">
      {/* sidebar */}
      <Sidebar />
      <div className="text-black font-inter w-full">
        <h1 className="text-3xl font-semibold mb-6">Form Tambah Mahasiswa</h1>
        <form method="POST" onSubmit={handleCreateKriteria}>
          <div className="form-item flex justify-between gap-5 mb-2">
            <div className="overflow-x-auto w-full">
              <label className="form-control w-full" htmlFor="kode_kriteria">
                <div className="label">
                  <span className="label-text text-black">Kode Kriteria</span>
                </div>
                <input
                  type="text"
                  name="kode_kriteria"
                  className="input input-bordered bg-gray-100 w-full"
                  onChange={changeKodeKriteria}
                />
              </label>
            </div>
            <div className="overflow-x-auto w-full">
              <label className="form-control w-full" htmlFor="nama_kriteria">
                <div className="label">
                  <span className="label-text text-black">Nama Kriteria</span>
                </div>
                <input
                  type="text"
                  name="nama_kriteria"
                  className="input input-bordered bg-gray-100 w-full"
                  onChange={changeNamaKriteria}
                />
              </label>
            </div>
          </div>
          <div className="form-item flex justify-between gap-5">
            <div className="overflow-x-auto w-full">
              <label className="form-control w-full" htmlFor="bobot">
                <div className="label">
                  <span className="label-text text-black">Nilai Bobot</span>
                </div>
                <input
                  type="number"
                  name="bobot"
                  className="input input-bordered bg-gray-100 w-full"
                  onChange={changeNilaiBobot}
                />
              </label>
            </div>
          </div>
          <div className="button mt-4">
            <button className="btn bg-blue-600 text-white shadow border-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FormKriteria;
