import React from "react";
import foods from "../assets/foods.png";
import dogEating from "../assets/dogeat.png";

export default function HealthSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 space-y-24">
      {/* Gastrointestinal health */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left image */}
        <div className="w-full md:w-[570px]">
          <img
            src={dogEating}
            alt="Two dogs eating"
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </div>

        {/* Right text */}
        <div className="w-full md:w-[570px]">
          <h3 className="text-2xl text-left font-semibold text-gray-900">
            Improve overall gastrointestinal health for better nutrient absorption
          </h3>
          <p className="mt-4 text-gray-600 text-left leading-relaxed">
            Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.

          </p>
        </div>
      </div>

      {/* Prebiotics section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        {/* Right image */}
        <div className="w-full md:w-[570px]">
          <img
            src={foods}
            alt="Dog food close-up"
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </div>

        {/* Left text */}
        <div className="w-full md:w-[570px]">
          <h3 className="text-2xl text-left font-semibold text-gray-900">
            Prebiotics nourish the beneficial gut bacteria, supporting digestive health
          </h3>
          <p className="mt-4 text-gray-600 text-left leading-relaxed">
           Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.
          </p>
        </div>
      </div>
    </section>
  );
}
