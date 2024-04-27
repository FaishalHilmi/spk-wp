import {
  getAllHasilModel,
  perhitunganRangking,
  getRank,
} from "../model/hasilModel.js";

export const getAllHasilController = async (req, res) => {
  try {
    const result = await getAllHasilModel();
    console.log();

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

export const updateRank = async (req, res) => {
  try {
    const result = await perhitunganRangking();

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

export const getAllRank = async (req, res) => {
  try {
    const result = await getRank();

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
