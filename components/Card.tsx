import React from "react";
export default function Card({ icon, title, description }) {
  return (
    <div className="bg-gray-900 bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition opacity-90">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
