import React from "react";

function Login() {
  return (
    <div className="w-80 h-80 ">
      <h2 className="border-b-2 border-green-800 mb-4 p-4 font-bold ">Login</h2>
      <div className="flex flex-col justify-center items-center gap-5 mt-8">
        <input
          type="email"
          className="w-72 h-10 p-6 border border-slate-500 text-slate-700 placeholder:text-slate-600 rounded-lg shadow-md hover:border-purple-500 cursor-pointer"
          placeholder="Email Address"
        />
        <input
          type="email"
          className="w-72 h-10 p-6 border border-slate-500 text-slate-700 placeholder:text-slate-600 rounded-lg shadow-md hover:border-purple-500 cursor-pointer"
          placeholder="Password"
        />
        <button className="btn">Login</button>
      </div>
    </div>
  );
}

export default Login;
