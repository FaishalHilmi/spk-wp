import React from "react";

function Navlist() {
  return (
    <div className="px-9 mx-auto text-white font-inter bg-slate-900 shadow-md">
      <div className="navbar">
        <div className="flex-1">
          <a className="text-xl font-bold">Weighted Product</a>
        </div>
        {/* <div className="flex-none">
          <ul className="flex gap-4">
            <li>
              <button className="py-2 px-4 bg-white text-black font-semibold rounded">
                Logout
              </button>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default Navlist;
