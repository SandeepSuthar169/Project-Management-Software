import React, { useState } from "react";
import { FaDiagramProject } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { MdLogin } from "react-icons/md";
import { BsPersonPlusFill } from "react-icons/bs";


function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center gap-2">
            <FaDiagramProject className="text-3xl gap-3 text-orange-700" />
            <h2 className=" font-semibold text-orange-400 ">FlowBoard</h2>
          </div>

          <div className="hidden md:flex gap-6">
            <button className="hover:text-orange-400 transition flex items-center gap-2 text-right text-orange-400"><FiHome className="text-orange-400"/>Home
            </button>
            <button className="hover:text-orange-400 transition flex items-center gap-2 text-right text-orange-400"><MdLogin className="text-orange-400" />Login</button>
            <button className="hover:bg-pink-500 transition flex items-center gap-2 text-right border text-white border-amber-600 bg-rose-500 py-2 px-3 rounded-xl"><BsPersonPlusFill className="text-white size-5"/>Sign Up</button>

          </div>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-neutral-950 px-4 pb-4 flex flex-col gap-3 py-3">
           <button className="hover:text-orange-400 transition flex items-center gap-2 text-right text-orange-400"><FiHome className="text-orange-400"/>Home</button>
            <button className="hover:text-orange-400 transition flex items-center gap-2 text-right text-orange-400"><MdLogin className="text-orange-400" />Login</button>
            <button className="hover:bg-pink-500 transition flex items-center gap-2 text-right border text-white border-amber-600 bg-rose-500 py-2 px-3 rounded-xl"><BsPersonPlusFill className="text-white size-5"/>Sign Up</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
