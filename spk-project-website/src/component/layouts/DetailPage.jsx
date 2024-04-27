import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function DetailPage() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const { id } = useParams();

  const getMahasiswaById = async () => {
    const URL = import.meta.env.VITE_REACT_APP_URL;

    try {
      const response = await axios.get(`${URL}/mahasiswa/${id}`);
      const data = await response.data;
      setMahasiswa(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMahasiswaById();
  }, [id]);

  useEffect(() => {
    console.log(mahasiswa); // Lakukan sesuatu dengan `mahasiswa` di sini
  }, [mahasiswa]);

  return (
    <section className="bg-white text-black flex min-h-[91vh] px-8 py-6">
      {/* sidebar */}
      <Sidebar />
      <div className="text-black font-inter w-full">
        <h1 className="text-3xl font-semibold mb-6">Detail Mahasiswa</h1>
        <Link to="/" className="btn bg-blue-700 border-none text-white mb-6">
          Kembali
        </Link>
        <div className="overflow-x-auto">
          <table className="w-full  text-start table ">
            <tbody>
              <tr className="text-base text-black font-light">
                <th className="text-start w-[20%]">Nama</th>
                <td className="w-[2%]">:</td>
                <td>
                  {mahasiswa.length > 0 ? mahasiswa[0].nama_mahasiswa : ""}
                </td>
              </tr>
              <tr className="text-base text-black font-light">
                <th className="text-start">Kelas</th>
                <td>:</td>
                <td>
                  {mahasiswa.length > 0 ? mahasiswa[0].kelas.toUpperCase() : ""}
                </td>
              </tr>
              <tr className="text-base text-black font-light">
                <th className="text-start">IPK</th>
                <td>:</td>
                <td>
                  {mahasiswa.length > 0 ? mahasiswa[0].ipk_mahasiswa : ""}
                </td>
              </tr>
              <tr className="text-base text-black font-light">
                <th className="text-start">Status Beasiswa</th>
                <td>:</td>
                <td>{mahasiswa.length > 0 ? mahasiswa[0].beasiswa : ""}</td>
              </tr>
              <tr className="text-base text-black font-light">
                <th className="text-start">Prestasi</th>
                <td>:</td>
                <td>{mahasiswa.length > 0 ? mahasiswa[0].prestasi : ""}</td>
              </tr>
              <tr className="text-base text-black font-light">
                <th className="text-start">Tingkat Prestasi</th>
                <td>:</td>
                <td>
                  {mahasiswa.length > 0 ? mahasiswa[0].tingkat_prestasi : ""}
                </td>
              </tr>
              <tr className="text-base text-black font-light">
                <th className="text-start">Jumlah Organisasi</th>
                <td>:</td>
                <td>
                  {mahasiswa.length > 0 ? mahasiswa[0].jumlah_organisasi : ""}
                </td>
              </tr>
              <tr className="text-base text-black font-light">
                <th className="text-start">Organisasi</th>
                <td>:</td>
                <td>{mahasiswa.length > 0 ? mahasiswa[0].organisasi : ""}</td>
              </tr>
              <tr className="text-base text-black font-light">
                <th className="text-start">Tingkat Organisasi</th>
                <td>:</td>
                <td>
                  {mahasiswa.length > 0 ? mahasiswa[0].tingkat_organisasi : ""}
                </td>
              </tr>
              <tr className="text-base text-black font-light">
                <th className="text-start">Fasilitas</th>
                <td>:</td>
                <td>{mahasiswa.length > 0 ? mahasiswa[0].fasilitas : ""}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
