// src/components/NutritionSection.jsx
import React from "react";
import dog from "../assets/dog.png";

export default function NutritionSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16">
      {/* Use flex-col on small screens, then change to flex-row (default) on medium screens (md) */}
      <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row gap-12 md:items-start md:justify-center">
    
        <div className="text-left w-full md:w-[570px]"> 
          <h3 className="text-2xl font-semibold text-gray-900">
            Nutrition is the foundation for longer, healthier lives in dogs.
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.
          </p>

          <p className="mt-9 font-bold space-y-2 text-gray-800"> Key Points</p>

          {/* Stats */}
          <div className="mt-3 space-y-2 text-gray-800">
            <p>
              <span className="text-orange-600 font-bold">97%</span> of dogs
              show improved coat health and vitality.
            </p>
            <p>
              <span className="text-orange-600 font-bold">84%</span> have better
              appetite and digestion.
            </p>
            <p>
              <span className="text-orange-600 font-bold">92%</span> show higher
              energy levels and mobility.
            </p>
          </div>

          <button className="mt-12 px-6 py-3 bg-orange-600 text-white rounded-md font-medium hover:bg-orange-500 transition">
            Give your furry friend the gift of wholesome nutrition
          </button>
        </div>

        <div className="flex justify-center w-full md:w-[570px] mt-8 md:mt-0"> 
          <img
            src={dog}
            alt="Happy dog with food"
            className="rounded-lg shadow-xl object-cover w-full h-auto" 
          />
        </div>
      </div>
    </section>
  );
}