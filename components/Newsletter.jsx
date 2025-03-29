"use client";
import { useState, useEffect } from "react";

export default function Newsletter() {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Stay updated with the latest listings
          </h2>
          <p className="mt-2 text-gray-600">
            Subscribe to our newsletter and never miss out on new business
            listings, offers, and industry insights.
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full py-3 px-4 text-gray-700 focus:outline-none"
              />
              <button
                type="button"
                className="bg-blue-700 text-white px-4 py-3 font-medium hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
