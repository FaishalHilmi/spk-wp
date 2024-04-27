import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import {
  optionPenerimaBeasiswa,
  optionPrestasi,
  optionOrganisasi,
  optionFasilitas,
} from "../../services/option";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormMahasiswa() {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [kelas, setkelas] = useState("");
  const [ipk, setIpk] = useState();
  const [beasiswa, setBeasiswa] = useState("");
  const [prestasi, setPrestasi] = useState("");
  const [tingkatPrestasi, setTingkatPrestasi] = useState("");
  const [jumlahOrganisasi, setJumlahOrganisasi] = useState();
  const [organisasi, setOrganisasi] = useState("");
  const [tingkatOrganisasi, setTingkatOrganisasi] = useState("");
  const [fasilitas, setFasilitas] = useState("");

  const createMahasiswa = async (event) => {
    event.preventDefault();
    const URL = import.meta.env.VITE_REACT_APP_URL;

    try {
      await axios.post(`${URL}/mahasiswa`, {
        nama_mahasiswa: nama,
        kelas: kelas,
        ipk_mahasiswa: ipk,
        beasiswa: beasiswa,
        prestasi: prestasi,
        tingkat_prestasi: tingkatPrestasi,
        jumlah_organisasi: jumlahOrganisasi,
        organisasi: organisasi,
        tingkat_organisasi: tingkatOrganisasi,
        fasilitas: fasilitas,
      });

      navigate("/");
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
        <form onSubmit={createMahasiswa}>
          <div className="form-item flex justify-between gap-5 mb-2">
            <div className="overflow-x-auto w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-black">Nama</span>
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered bg-gray-100 w-full"
                  onChange={(nama) => setNama(nama.target.value)}
                />
              </label>
            </div>
            <div className="overflow-x-auto w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-black">Kelas</span>
                </div>
                <input
                  type="text"
                  placeholder="PSIK B 21"
                  className="input input-bordered bg-gray-100 w-full"
                  onChange={(kelas) => setkelas(kelas.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="form-item flex justify-between gap-5 mb-2">
            <div className="overflow-x-auto w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-black">
                    Masukkan Nilai Indeks Prestasi Akademik (IPK) Anda (Contoh :
                    3.72)
                  </span>
                </div>
                <input
                  type="number"
                  placeholder="3.72"
                  className="input input-bordered bg-gray-100 w-full"
                  step="any"
                  onChange={(ipk) => setIpk(ipk.target.value)}
                />
              </label>
            </div>
            <div className="overflow-x-auto w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-black">
                    Apakah Anda pernah mendapat beasiswa sebelumnya?
                  </span>
                </div>
                <select
                  className="select select-bordered bg-gray-100"
                  onChange={(beasiswa) => setBeasiswa(beasiswa.target.value)}
                >
                  <option disabled selected>
                    Pilih
                  </option>
                  {optionPenerimaBeasiswa.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div className="form-item flex justify-between gap-5 mb-2">
            <div className="overflow-x-auto w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-black">
                    Prestasi anda selama perkuliahan? (Jawab <b>tidak ada</b>{" "}
                    jika tidak ada)
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Menang Gemastik"
                  className="input input-bordered bg-gray-100 w-full"
                  onChange={(prestasi) => setPrestasi(prestasi.target.value)}
                />
              </label>
            </div>
            <div className="overflow-x-auto w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-black">
                    Tingkat prestasi yang didapat
                  </span>
                </div>
                <select
                  className="select select-bordered bg-gray-100"
                  onChange={(tingkatPrestasi) =>
                    setTingkatPrestasi(tingkatPrestasi.target.value)
                  }
                >
                  <option disabled selected>
                    Pilih
                  </option>
                  {optionPrestasi.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div className="form-item flex justify-between gap-5 mb-2">
            <div className="overflow-x-auto w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-black">
                    Jumlah Organisasi yang pernah Anda ikuti
                  </span>
                </div>
                <input
                  type="number"
                  placeholder="1"
                  className="input input-bordered bg-gray-100 w-full"
                  onChange={(jumlahOrganisasi) =>
                    setJumlahOrganisasi(jumlahOrganisasi.target.value)
                  }
                />
              </label>
            </div>
            <div className="overflow-x-auto w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-black">
                    Organisasi yang diikuti selama perkuliahan (Jawab{" "}
                    <b>tidak ada</b> jika tidak ada)
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="HMJ"
                  className="input input-bordered bg-gray-100 w-full"
                  onChange={(organisasi) =>
                    setOrganisasi(organisasi.target.value)
                  }
                />
              </label>
            </div>
          </div>
          <div className="form-item flex justify-between gap-5">
            <div className="overflow-x-auto w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-black">
                    Tingkat Organisasi yang diikuti
                  </span>
                </div>
                <select
                  className="select select-bordered bg-gray-100"
                  onChange={(tingkatOrganisasi) =>
                    setTingkatOrganisasi(tingkatOrganisasi.target.value)
                  }
                >
                  <option disabled selected>
                    Pilih
                  </option>
                  {optionOrganisasi.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="overflow-x-auto w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-black">
                    Apakah fasilitas yang dimiliki (contoh: laptop, kuota, dll)
                  </span>
                </div>
                <select
                  className="select select-bordered bg-gray-100"
                  onChange={(fasilitas) => setFasilitas(fasilitas.target.value)}
                >
                  <option disabled selected>
                    Pilih
                  </option>
                  {optionFasilitas.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
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

export default FormMahasiswa;
