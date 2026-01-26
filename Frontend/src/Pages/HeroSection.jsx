import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function HeroSection() {
  return (
    <section className="w-full bg-amber-100  text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              The all-in-one platform for    
              <span className="text-orange-400">  project management</span>
            </h1>

            <div className="space-y-3">
              <p className="flex items-center gap-2 text-gray-300">
                <IoCheckmarkCircleOutline className="text-pink-600 text-xl" />
                Plan your projects
              </p>

              <p className="flex items-center gap-2 text-gray-300">
                <IoCheckmarkCircleOutline className="text-pink-600  text-xl" />
                Track work efficiently
              </p>

              <p className="flex items-center gap-2 text-gray-300">
                <IoCheckmarkCircleOutline className="text-pink-600 text-xl" />
                Collaborate with global teams
              </p>
            </div>

            <button className="bg-pink-500 hover:bg-pink-600 transition px-6 py-3 rounded-md font-semibold w-fit shadow-lg">
              Get Started
            </button>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="images\Dash.avif"
              alt="kan-ban-board"
              className="w-full max-w-lg md:max-w-lg rounded-lg shadow-xl"
            />
          </div>

        </div>
      </div>
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 mt-10">
        <ul className="max-w-3xl">
          <li className="text-center sm:text-left text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">Join the 
            <span className="font-semibold">300,000+</span> customers that power team collaboration with <span className="font-semibold text-blue-600">
              Atlassian
            </span>
          </li>
         </ul>
      </div>
      <div className="w-full py-8 px-4 sm:px-6 lg:px-12">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
      
      <img
        src="https://dam-cdn.atl.orangelogic.com/AssetLink/q12105gpgq24dax7m0y2dww8m2lww0mp/fl_keep_metadata/logo-strava.svg"
        alt="Strava"
        className="h-8 sm:h-10 md:h-12 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
      />

      <img
        src="https://dam-cdn.atl.orangelogic.com/AssetLink/658vw3s1k5w08l30a12423yubi22ttg2/fl_keep_metadata/CSD-9732_Customer-Logo-Square.webp"
        alt="Customer"
        className="h-8 sm:h-10 md:h-12 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
      />

      <img
        src="https://dam-cdn.atl.orangelogic.com/AssetLink/yfboqb04f58iu8j06qn75uys682ak30g/fl_keep_metadata/logo-AMD.svg"
        alt="AMD"
        className="h-8 sm:h-10 md:h-12 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
      />

      <img
        src="https://dam-cdn.atl.orangelogic.com/AssetLink/g26n5u77y20b0aes11621wt5x0fk2wj5/fl_keep_metadata/logo-venmo.svg"
        alt="Venmo"
        className="h-8 sm:h-10 md:h-12 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
      />

      <img
        src="https://cdn.prod.website-files.com/63bd15a406b2101a5dbb3e8f/65f0151a95f7f97e1b1ee891_Coca-Cola.svg"
        alt="Coca-Cola"
        className="h-8 sm:h-10 md:h-12 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
      />

      <img
        src="https://cdn.prod.website-files.com/63bd15a406b2101a5dbb3e8f/65f0151b631873adc71179f3_BD.avif"
        alt="BD"
        className="h-8 sm:h-10 md:h-12 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
      />

    </div>
  </div>
</div>


    </section>
  );
}

export default HeroSection;
