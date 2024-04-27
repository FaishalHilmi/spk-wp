export const perhitunganVektor = (nilai) => {
  // Menghitung nilai dari setiap faktor
  var nilai1 = Math.pow(nilai.hasilIPK, 0.266667);
  var nilai2 = Math.pow(nilai.hasilBeasiswa, -0.2);
  var nilai3 = Math.pow(nilai.hasilTingkatPrestasi, 0.2);
  var nilai4 = Math.pow(nilai.hasilTingkatOrganisasi, 0.133333);
  var nilai5 = Math.pow(nilai.hasilJumlahOrganisasi, -0.133333);
  var nilai6 = Math.pow(nilai.hasilFasilitas, -0.0666667);

  // Mengalikan semua nilai
  var hasil = nilai1 * nilai2 * nilai3 * nilai4 * nilai5 * nilai6;

  // Mengembalikan hasil perhitungan
  return hasil;
};
