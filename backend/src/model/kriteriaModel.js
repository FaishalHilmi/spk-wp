import { getConnection } from "../config/database.js";

export const getAllKriteriaModel = async () => {
  const db = await getConnection();
  const SQLQuery = "SELECT * FROM tb_kriteria";

  const [result] = await db.query(SQLQuery);

  return result;
};

export const createtKriteriaModel = async (kriteria) => {
  const db = await getConnection();
  const SQLQuery = `INSERT INTO tb_kriteria (kode_kriteria, nama_kriteria, bobot, normalisasi_bobot) 
      VALUES ('${kriteria.kode_kriteria}', '${kriteria.nama_kriteria}', '${kriteria.bobot}', '${kriteria.normalisasi}')`;

  const result = await db.query(SQLQuery);

  return result;
};

export const deletekriteriaModel = async (id) => {
  const db = await getConnection();
  const SQLQuery = `DELETE FROM tb_kriteria WHERE id_kriteria = ${id}`;

  const result = db.query(SQLQuery);

  return result;
};
