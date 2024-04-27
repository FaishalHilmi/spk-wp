import { getConnection } from "../config/database.js";

export const getAllMahasiswaModel = async () => {
  const db = await getConnection();
  const SQLQuery = "SELECT * FROM tb_mahasiswa";

  const [result] = await db.query(SQLQuery);

  return result;
};

export const getMahasiswaByIdModel = async (id) => {
  const db = await getConnection();
  const SQLQuery = `SELECT * FROM tb_mahasiswa WHERE id_mahasiswa = ${id}`;

  const [result] = await db.query(SQLQuery);

  return result;
};

export const getIdMahasiswa = async () => {
  const db = await getConnection();

  const SQLQuery =
    "SELECT id_mahasiswa FROM tb_mahasiswa ORDER BY id_mahasiswa DESC LIMIT 1";

  const [result] = await db.query(SQLQuery);

  return result;
};

export const createMahasiswaModel = async (mahasiswa) => {
  const db = await getConnection();
  const SQLQuery = `INSERT INTO tb_mahasiswa 
                    (nama_mahasiswa, kelas, ipk_mahasiswa, beasiswa, prestasi, tingkat_prestasi, jumlah_organisasi, organisasi, tingkat_organisasi, fasilitas) 
                    VALUES
                    ('${mahasiswa.nama_mahasiswa}', '${mahasiswa.kelas}', '${mahasiswa.ipk_mahasiswa}', '${mahasiswa.beasiswa}', '${mahasiswa.prestasi}', '${mahasiswa.tingkat_prestasi}', '${mahasiswa.jumlah_organisasi}', '${mahasiswa.organisasi}', '${mahasiswa.tingkat_organisasi}', '${mahasiswa.fasilitas}')`;

  const result = await db.query(SQLQuery);

  return result;
};

export const deleteMahasiswaModel = async (id) => {
  const db = await getConnection();
  const SQLQueryHasil = `DELETE FROM tb_hasil WHERE id_mahasiswa = ${id}`;
  const SQLQueryMahasiswa = `DELETE FROM tb_mahasiswa WHERE id_mahasiswa = ${id}`;

  const resulthasil = db.query(SQLQueryHasil);
  const resultMahasiswa = db.query(SQLQueryMahasiswa);
};

export const createHasilModel = async (nilai) => {
  const db = await getConnection();
  const SQLQuery = `INSERT INTO tb_hasil (nilai_1, nilai_2, nilai_3, nilai_4, nilai_5, nilai_6, hasil_vektor, id_mahasiswa) 
                    VALUES
                    (${nilai.hasilIPK}, ${nilai.hasilBeasiswa}, ${nilai.hasilTingkatPrestasi}, ${nilai.hasilTingkatOrganisasi}, ${nilai.hasilJumlahOrganisasi}, ${nilai.hasilFasilitas}, ${nilai.hasilVektor}, ${nilai.idMahasiswa})`;

  const result = await db.query(SQLQuery);

  return result;
};
