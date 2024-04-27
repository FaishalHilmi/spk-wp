import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const dataLinks = [
    {
      path: "/",
      name: "Data Mahasiswa",
    },
    {
      path: "/kriteria",
      name: "Kriteria",
    },
    {
      path: "/perhitungan-mahasiswa",
      name: "Perhitungan",
    },
    {
      path: "/rangking-mahasiswa",
      name: "Hasil Rangking",
    },
  ];

  return (
    <div className="aside font-inter bg-gradient-to-br from-slate-900 to-slate-700 me-6 min-h-full rounded-xl shadow-md">
      <div className="side">
        <ul className="menu text-white p-4 w-80 min-h-full font-inter gap-1">
          {dataLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path} className="font-semibold text-base">
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
