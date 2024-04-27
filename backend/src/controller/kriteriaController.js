import {
  createtKriteriaModel,
  deletekriteriaModel,
  getAllKriteriaModel,
} from "../model/kriteriaModel.js";

export const getAllKriteriaController = async (req, res) => {
  try {
    const result = await getAllKriteriaModel();

    res.status(200).json({
      message: "Berhasil mendapatkan data kriteria",
      data: result,
    });
  } catch (error) {
    res.status(401).json({
      message: "Gagal mendapatkan data kriteria",
      serverMessage: error,
    });
  }
};

export const createKriteriaController = async (req, res) => {
  const { kode_kriteria, nama_kriteria, bobot, normalisasi_bobot } = req.body;

  const normalisasiBobot = (bobot) => {
    return bobot / (4 + 3 + 3 + 2 + 2 + 1);
  };

  const normalisasi = normalisasiBobot(bobot);

  const dataKriteria = {
    kode_kriteria,
    nama_kriteria,
    bobot,
    normalisasi,
  };

  try {
    const result = await createtKriteriaModel(dataKriteria);

    res.json({
      message: "Berhasil menambahkan kriteria",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan kriteria",
      serverMessage: error,
    });
  }
};

export const deleteKriteriaController = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deletekriteriaModel(id);

    res.status(200).json({
      message: "Berhasil menghapus kriteria",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengapus kriteria",
      serverMessage: error,
    });
  }
};
