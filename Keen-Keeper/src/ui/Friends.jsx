import React from 'react';

const Friends = ({frind: friend}) => {
      const statusStyle = (status) => {
    if (status === "on-track") {
      return "bg-green-800 text-white";
    }else if (status === "overdue"){
      return "bg-red-600 text-white"
    }
    else {
      return"bg-yellow-500 text-white"
    }
  };

    return (
        <div
            
            className=" rounded-2xl shadow-sm p-6 text-center"
          >
            {/* Profile Picture */}
            <div className="flex justify-center mb-5">
              <img
                src={friend.picture}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow"
              />
            </div>

            {/* Name */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">
              {friend.name}
            </h3>

            {/* Time ago */}
            <p className="text-gray-500 text-sm mb-6">
              {friend.days_since_contact}d ago
            </p>

            {/* Tags */}
            <div className="space-y-3">
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {friend.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="
       bg-gradient-to-r from-emerald-100 to-emerald-200 
        text-emerald-700 
        text-xs sm:text-sm 
        font-medium 
        px-3 sm:px-4 py-1 
        rounded-full 
        shadow-sm 
        hover:scale-105 hover:bg-emerald-300 
        transition-all duration-200
      "
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div
                className={`
    text-xs sm:text-sm 
    font-medium 
    px-4 sm:px-6 py-1 sm:py-2 
    rounded-full 
    inline-block 
    capitalize
     hover:scale-105
    ${statusStyle(friend.status)}
  `}
              >
                {friend.status}
              </div>
            </div>
          </div>
    );
};

export default Friends;