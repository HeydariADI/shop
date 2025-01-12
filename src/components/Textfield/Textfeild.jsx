import React from "react";

function Textfeild() {
  return (
    <input
      type="email"
      className="w-72 h-10 p-6 border border-slate-500 text-slate-700 placeholder:text-slate-600 rounded-lg shadow-md hover:border-purple-500 cursor-pointer"
      placeholder="Email Address"
    />
  );
}

export default Textfeild;
