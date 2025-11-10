// src/components/HealthSection.jsx
import React from "react";

export default function HealthSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 space-y-24">
      {/* Gastrointestinal health */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left image */}
        <div className="flex justify-center order-1 md:order-none">
          <img
            src="https://images.unsplash.com/photo-1601758124064-4f2440a24a4d?auto=format&fit=crop&w=600&q=80"
            alt="Two dogs eating"
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Right text */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">
            Improve overall gastrointestinal health for better nutrient
            absorption
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our organic, nutrient-dense kibble is formulated with probiotics and
            fiber to ensure proper digestion and promote a stronger immune
            system.
          </p>
        </div>
      </div>

      {/* Prebiotics section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">
            Prebiotics nourish the beneficial gut bacteria, supporting digestive
            health
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Healthy digestion starts in the gut. Our formulas include carefully
            curated prebiotics that work synergistically to sustain healthy gut
            flora for optimal absorption and immune balance.
          </p>
        </div>

        {/* Right image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1598133894009-019b5d5c708e?auto=format&fit=crop&w=600&q=80"
            alt="Dog food close-up"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
