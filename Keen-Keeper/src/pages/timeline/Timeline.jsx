import React, { useContext, useState } from "react";
import { FriendsContext } from "../../context/FriendsContext";
import { RiArrowDropDownLine } from "react-icons/ri";

const Timeline = () => {
  const { timelineData } = useContext(FriendsContext);

  const [filter, setFilter] = useState("all");
  console.log(filter);

  const filteredData =
    filter === "all"
      ? timelineData
      : timelineData.filter((item) => item.action === filter);

  console.log(filteredData);

  const getIcon = (action) => {
    if (action === "call") return "📞";
    if (action === "text") return "💬";
    if (action === "video") return "🎥";
    return "🤝";
  };
//   console.log(getIcon);

  return timelineData.length === 0 ? (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {/* Icon */}
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-3xl mb-4">
        🕒
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800">No activity yet</h2>

      {/* Subtitle */}
      <p className="text-gray-500 mt-2 max-w-md">
        আপনার timeline এখনো empty আছে। নতুন activity হলে এখানে দেখা যাবে।
      </p>
    </div>
  ) : (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Timeline: {timelineData.length}
      </h1>

      {/* Filter Dropdown */}
      <div className="dropdown dropdown-start">
        <div tabIndex={0} role="button" className="btn m-1">
          <span className="text-[18px]">Filter timeline: {filteredData.length}</span>{" "}
          <span className="pl-9">
            <RiArrowDropDownLine className="text-2xl" />
          </span>
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => setFilter("all")}>All</a>
          </li>
          <li>
            <a onClick={() => setFilter("call")}>Call</a>
          </li>
          <li>
            <a onClick={() => setFilter("text")}>Text</a>
          </li>
          <li>
            <a onClick={() => setFilter("video")}>Video</a>
          </li>
        </ul>
      </div>

      {/* Events */}
      <div className="space-y-4">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5 border border-gray-100"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              {getIcon(item.action)}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Meetup with{" "}
                <span className="text-gray-500">{item.friend.name}</span>
              </h3>
              {/* exact  jokhon click hbe tar time dekhabe ar ei exact time ta asche  FriendDetails.jsx er time: new Date(), eta theke */}
              <p className="text-gray-500 mt-1">{item.time.toLocaleString()}</p>
              {/* api theke dekhate hole 
              {item.friend.next_due_date} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
