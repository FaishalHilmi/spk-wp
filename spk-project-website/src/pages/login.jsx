import React from "react";

function Login() {
  return (
    <section className="min-h-screen bg-gradient-to-tr from-slate-800 to-slate-500 flex justify-center items-center">
      <div className="w-full">
        <div className="wrapper max-w-xl mx-auto shadow p-4 rounded-lg bg-white">
          <div className="header mb-4">
            <h1 className="text-2xl font-bold text-black mb-2">Login</h1>
            <h4 className=" text-sm">Silahkan masukkan data pribadi anda</h4>
          </div>
          <form>
            <div className="form-item w-full">
              <div className="overflow-x-auto w-full mb-2">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-black">Username</span>
                  </div>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="input input-bordered bg-gray-50 w-full text-black"
                  />
                </label>
              </div>
              <div className="overflow-x-auto w-full">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-black">Passsword</span>
                  </div>
                  <input
                    type="text"
                    placeholder="*****"
                    className="input input-bordered bg-gray-50 w-full text-black"
                  />
                </label>
              </div>
            </div>
            <div className="button mt-4">
              <button className="btn bg-blue-600 text-white border-none">
                Masuk
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
