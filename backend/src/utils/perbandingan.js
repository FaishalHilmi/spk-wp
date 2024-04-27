export const perbandinganIPK = (ipk) => {
  if (ipk < 3.0) {
    return 1;
  } else if (ipk >= 3.0 && ipk < 3.25) {
    return 2;
  } else if (ipk >= 3.25 && ipk < 3.5) {
    return 3;
  } else if (ipk >= 3.5 && ipk < 3.75) {
    return 4;
  } else {
    return 5;
  }
};

export const perbandinganBeasiswa = (beasiswa) => {
  const hasilBeasiswa = beasiswa.toLowerCase();

  if (hasilBeasiswa == "sudah") {
    return 1;
  } else {
    return 5;
  }
};

export const perbandinganPrestasi = (prestasi) => {
  const tingkatPrestasi = prestasi.toLowerCase();

  if (tingkatPrestasi == "tidak ada") {
    return 1;
  } else if (tingkatPrestasi == "finalis tingkat universitas") {
    return 2;
  } else if (
    tingkatPrestasi == "menang tingkat universitas" ||
    tingkatPrestasi == "finalis tingkat nasional"
  ) {
    return 3;
  } else {
    return 5;
  }
};

export const perbandinganOrganisasi = (organisasi) => {
  const tingkatOrganisasi = organisasi.toLowerCase();

  if (tingkatOrganisasi == "tidak pernah ikut organisasi") {
    return 1;
  } else if (tingkatOrganisasi == "tingkat jurusan") {
    return 2;
  } else if (tingkatOrganisasi == "tingkat fakultas") {
    return 3;
  } else {
    return 5;
  }
};

export const perbandinganJumlahOrganisasi = (jumlahOrganisasi) => {
  if (jumlahOrganisasi == 0) {
    return 1;
  } else if (jumlahOrganisasi >= 3) {
    return 2;
  } else if (jumlahOrganisasi == 2) {
    return 4;
  } else {
    return 5;
  }
};

export const perbandinganFasilitas = (fasilitas) => {
  const hasilFasilitas = fasilitas.toLowerCase();

  if (hasilFasilitas == "sangat memadai") {
    return 1;
  } else if (hasilFasilitas == "cukup memadai") {
    return 3;
  } else {
    return 5;
  }
};
