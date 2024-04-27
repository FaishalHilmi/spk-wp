import { getConnection } from "../config/database.js";

let targetV;
let vektorV;

export const getAllHasilModel = async () => {
  const db = await getConnection();
  const SQLQuery =
    "SELECT hasil.*, mahasiswa.nama_mahasiswa FROM tb_hasil hasil LEFT JOIN tb_mahasiswa mahasiswa ON hasil.id_mahasiswa = mahasiswa.id_mahasiswa";

  const [result] = await db.query(SQLQuery);

  return result;
};

export const getRank = async () => {
  const db = await getConnection();
  const SQLQuery =
    "SELECT m.id_mahasiswa, m.nama_mahasiswa, h.vektor_v FROM tb_hasil h LEFT JOIN tb_mahasiswa m ON h.id_mahasiswa = m.id_mahasiswa ORDER BY h.vektor_v DESC";

  const [result] = await db.query(SQLQuery);

  return result;
};

export const perhitunganRangking = async () => {
  const db = await getConnection();
  let SQLQuery = "SELECT id_mahasiswa, hasil_vektor FROM tb_hasil";
  let allVektor = 0;

  const [result] = await db.query(SQLQuery);

  // get the sigma vektor
  result.map((vektor) => {
    allVektor += vektor.hasil_vektor;
  });

  let hasilVektor = result.map((vektor) => {
    targetV = vektor.hasil_vektor;
    vektorV = targetV / allVektor;

    // update tb_hasil.vektorV foreach vektorV
    SQLQuery = "UPDATE tb_hasil SET vektor_v = ? WHERE id_mahasiswa = ?";
    db.query(SQLQuery, [vektorV, vektor.id_mahasiswa]);
  });

  return hasilVektor;
};
