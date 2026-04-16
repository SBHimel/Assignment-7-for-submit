import React, { useContext, useState } from "react";
import { FriendsContext } from "../../context/FriendsContext";
import { RiArrowDropDownLine } from "react-icons/ri";

const Timeline = () => {
  const { timelineData } = useContext(FriendsContext);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  console.log(filter);


  let data = timelineData;
  // filter
   /*যদি "all" না হয়
(মানে call/text/video কিছু selected hoy tahole শুধু ওই type এর data রাখো)  */
  if (filter !== "all") {
    data = data.filter((item) => item.action === filter);
  }
  // search--> ager filter data theke name khuje ber kora
  data = data.filter((item) =>
    item.friend.name.toLowerCase().includes(search.toLowerCase()),
  );
  /* .includes(...) ---> এটা check করে “মিলছে কিনা” */

  const filteredData = data;
  console.log(filteredData);

/* sort এর কাজ হলো “সাজানো” */
  const sortedData = [...filteredData].sort(
    (a,b) => new Date(b.time) - new Date(a.time)
  );


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
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Timeline: {timelineData.length}
          </h1>
        </div>

        {/* 🔍 Search Box */}
        <div className="mb-6">
          <p className="text-lg font-semibold mb-2">🔎 Search by name</p>

          <input
            type="text"
            placeholder="Type a name..."
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Filter Dropdown */}
      <div className="dropdown dropdown-start">
        <div tabIndex={0} role="button" className="btn m-1">
          <span className="text-[18px]">
           <p> Filter timeline: {filteredData.length}  <span className="pl-2">({filter})</span></p> 
          </span>{" "}
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
        {sortedData.map((item, index) => (
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
