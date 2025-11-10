// src/components/DifferenceSection.jsx
import React from "react";

function FeatureItem({ title, text }) {
  return (
    <div className="max-w-xs">
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-600 text-sm mt-1">{text}</p>
    </div>
  );
}

export default function DifferenceSection() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-black-900">
          What makes us different, <br className="hidden sm:block" />
          <span className="text-black-900">Makes them stronger.</span>
        </h2>

        {/* Features and Image */}
        <div className="relative mt-12 flex flex-col lg:flex-row items-center justify-center">
          {/* Left features */}
          <div className="flex flex-col gap-8 text-left lg:text-right lg:w-1/3">
            <FeatureItem
              title="Real Food"
              text="Wholesome recipes for dogs of all sizes, rich in meat and veggies."
            />
            <FeatureItem
              title="Premium Ingredient"
              text="Our quality ingredients are vet-certified and responsibly sourced."
            />
          </div>

          {/* Center image */}
          <div className="my-10 lg:my-0 lg:w-1/3 flex justify-center relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-lg border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1604908176997-86ef1f8b3a59?auto=format&fit=crop&w=400&q=80"
                alt="Dog food bowl"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right features */}
          <div className="flex flex-col gap-8 text-left lg:w-1/3">
            <FeatureItem
              title="Made Fresh"
              text="We prioritize maintaining the integrity of whole food nutrients."
            />
            <FeatureItem
              title="Vet Developed"
              text="Our recipes are crafted by dog nutritionists to support lifelong health."
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="px-6 py-3 bg-orange-600 text-white rounded-md font-medium hover:bg-orange-500 transition">
            Get your dog a healthy head start
          </button>
        </div>
      </div>
    </section>
  );
}
