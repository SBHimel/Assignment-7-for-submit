import React from "react";

const Counter = () => {
  const stats = [
    { value: 10, label: "Total Friends" },
    { value: 3, label: "On Track" },
    { value: 6, label: "Need Attention" },
    { value: 12, label: "Interactions This Month" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center"
          >
            <div className="text-5xl font-bold text-emerald-600 mb-1">
              {item.value}
            </div>
            <p className="text-gray-500 text-sm font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
