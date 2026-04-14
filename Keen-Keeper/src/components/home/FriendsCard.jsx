import React, { useEffect, useState } from "react";

const FriendsCard = () => {
  const [frinds, setFriends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log(data);
      setFriends(data);
    };
    fetchData();
  }, []);

  console.log(frinds, "frinds data");

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="pb-5">
        <h2 className="font-bold text-2xl ">Your Friends: {frinds.length}</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        
        {frinds.map(frind => (
            <div key={frind.id} className=" rounded-2xl shadow-sm p-6 text-center">
          {/* Profile Picture */}
          <div className="flex justify-center mb-5">
            <img
              src={frind.picture}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow"
            />
          </div>

          {/* Name */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-1">
            David Kim
          </h3>

          {/* Time ago */}
          <p className="text-gray-500 text-sm mb-6">62d ago</p>

          {/* Tags */}
          <div className="space-y-3">
            <div className="bg-emerald-100 text-emerald-700 text-xs font-medium px-6 py-2 rounded-full inline-block">
              WORK
            </div>

            <div className="bg-orange-100 text-orange-700 text-xs font-medium px-6 py-2 rounded-full inline-block">
              Almost Due
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsCard;
