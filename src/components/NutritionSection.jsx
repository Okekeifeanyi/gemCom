// src/components/NutritionSection.jsx
import React from "react";

export default function NutritionSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">
            Nutrition is the foundation for longer, healthier lives in dogs.
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Based on years of veterinary and nutritional research, our formulas
            are designed to provide the perfect balance of proteins, fats, and
            essential nutrients for a happy, active dog.
          </p>

          {/* Stats */}
          <div className="mt-6 space-y-2 text-gray-800">
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

          <button className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-md font-medium hover:bg-orange-500 transition">
            Give your furry friend the gift of wholesome nutrition
          </button>
        </div>

        {/* Right image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1601758123927-1960b2e69c8a?auto=format&fit=crop&w=600&q=80"
            alt="Happy dog with food"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
