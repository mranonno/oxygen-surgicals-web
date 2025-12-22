"use client";

import { ChevronDown } from "lucide-react";

const categories = [
  "Medical Equipment",
  "Accessories",
  "Surgical Instruments",
  "Pulse Oximeters",
  "Scissors & Cutters",
  "Diagnostic Tools",
];

const CategoriesBar = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white border-y border-gray-200 mb-4">
      <div className="flex justify-start">
        <ul
          className="flex items-center gap-6 overflow-x-auto py-3
                     text-sm font-medium text-gray-800
                     scrollbar-hide"
        >
          {/* All Categories */}
          <li>
            <button
              className="flex items-center gap-1 whitespace-nowrap
                         text-[#0E7A80] hover:opacity-80 transition"
            >
              All Categories
              <ChevronDown size={16} />
            </button>
          </li>

          {/* Category Items */}
          {categories.map((item) => (
            <li key={item}>
              <button
                className="whitespace-nowrap px-2 py-1 rounded-md hover:cursor-pointer
                           hover:text-[#0E7A80]
                           transition"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesBar;
