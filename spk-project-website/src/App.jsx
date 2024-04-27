import DataMahasiswa from "./pages/dataMahasiswa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kriteria from "./pages/kriteria";
import Perhitungan from "./pages/perhitungan";
import Rangking from "./pages/rangking";
import TambahMahasiswa from "./pages/tambahMahasiswa";
import TambahKriteria from "./pages/tambahKriteria";
import Login from "./pages/login";
import DetailMahasiswa from "./pages/detailMahasiswa";

function App() {
  return (
    <div className="bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<DataMahasiswa />} />
          <Route path="/login" element={<Login />} />
          <Route path="/kriteria" element={<Kriteria />} />
          <Route path="/perhitungan-mahasiswa" element={<Perhitungan />} />
          <Route path="/rangking-mahasiswa" element={<Rangking />} />
          <Route path="/tambah-mahasiswa" element={<TambahMahasiswa />} />
          <Route path="/tambah-kriteria" element={<TambahKriteria />} />
          <Route path="/detail-mahasiswa/:id" element={<DetailMahasiswa />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
