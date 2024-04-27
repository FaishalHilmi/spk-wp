import {
  createHasilModel,
  createMahasiswaModel,
  deleteMahasiswaModel,
  getAllMahasiswaModel,
  getIdMahasiswa,
  getMahasiswaByIdModel,
} from "../model/mahasiswaModel.js";

import {
  perbandinganBeasiswa,
  perbandinganFasilitas,
  perbandinganPrestasi,
  perbandinganIPK,
  perbandinganJumlahOrganisasi,
  perbandinganOrganisasi,
} from "../utils/perbandingan.js";
import { perhitunganVektor } from "../utils/perhitungan.js";

export const getAllMahasiswaController = async (req, res) => {
  try {
    const result = await getAllMahasiswaModel();

    res.status(200).json({
      message: "Berhasil mendapatkan data mahasiswa",
      data: result,
    });
  } catch (error) {
    res.status(401).json({
      message: "Gagal mendapatkan data mahasiswa",
      serverMessage: error,
    });
  }
};

export const getMahasiswaByIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await getMahasiswaByIdModel(id);

    res.status(200).json({
      message: "Berhasil mendapatkan data mahasiswa",
      data: result,
    });
  } catch (error) {
    res.status(401).json({
      message: "Gagal mendapatkan data mahasiswa",
      serverMessage: error,
    });
  }
};

export const createMahasiswaController = async (req, res) => {
  const {
    nama_mahasiswa,
    kelas,
    ipk_mahasiswa,
    beasiswa,
    prestasi,
    tingkat_prestasi,
    jumlah_organisasi,
    organisasi,
    tingkat_organisasi,
    fasilitas,
  } = req.body;

  const hasilIPK = await perbandinganIPK(ipk_mahasiswa);
  const hasilBeasiswa = await perbandinganBeasiswa(beasiswa);
  const hasilTingkatPrestasi = await perbandinganPrestasi(tingkat_prestasi);
  const hasilJumlahOrganisasi = await perbandinganJumlahOrganisasi(
    jumlah_organisasi
  );
  const hasilTingkatOrganisasi = await perbandinganOrganisasi(
    tingkat_organisasi
  );
  const hasilFasilitas = await perbandinganFasilitas(fasilitas);

  const dataMahasiswa = {
    nama_mahasiswa,
    kelas,
    ipk_mahasiswa,
    beasiswa,
    prestasi,
    tingkat_prestasi,
    jumlah_organisasi,
    organisasi,
    tingkat_organisasi,
    fasilitas,
  };

  const dataPerhitungan = {
    hasilIPK,
    hasilBeasiswa,
    hasilTingkatPrestasi,
    hasilTingkatOrganisasi,
    hasilJumlahOrganisasi,
    hasilFasilitas,
  };

  const hasilVektor = await perhitunganVektor(dataPerhitungan);

  try {
    const result = await createMahasiswaModel(dataMahasiswa);
    const createdMahasiswa = await getIdMahasiswa();

    const idMahasiswa = createdMahasiswa[0].id_mahasiswa;
    const dataHasil = {
      ...dataPerhitungan,
      hasilVektor,
      idMahasiswa,
    };
    const hasil = await createHasilModel(dataHasil);

    res.json({
      message: "Berhasil menambahkan data mahasiswa",
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan data mahasiswa",
      serverMessage: error,
    });
  }
};

export const deleteMahasiswaController = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteMahasiswaModel(id);

    res.status(200).json({
      message: "Berhasil menghapus mahasiswa",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengapus mahasiswa",
      serverMessage: error,
    });
  }
};
