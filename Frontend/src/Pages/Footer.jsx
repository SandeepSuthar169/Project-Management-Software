import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-amber-200 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} FlowBoard. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
