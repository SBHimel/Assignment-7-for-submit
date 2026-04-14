import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { FriendsContext } from "../../context/FriendsContext";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { PiVideoCamera } from "react-icons/pi";
import { PacmanLoader } from "react-spinners";

const FriendDetails = () => {
  const { friends, loading, statusStyle } = useContext(FriendsContext);
  console.log(friends);
  const { id } = useParams();

   const [showFull, setShowFull] = useState(false);

  const friend = friends.find((item) => item.id === Number(id));

  if (!friend) {
    return <div className="flex flex-col justify-center items-center h-40 gap-3">
          <PacmanLoader color="#10b981" size={20} />
          <p className="text-sm font-bold text-gray-500">Loading data...</p>
        </div>;
  }

 




  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - Profile Card */}
        <div className="lg:col-span-1 bg-white rounded-3xl shadow-sm p-3 text-center">
          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <img
              src={friend.picture}
              alt=""
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
            />
          </div>

          {/* Name */}
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            {friend.name}
          </h2>

          {/* Status Tags */}
          <div className="  mb-4">
            <div>
              <span className={` font-medium px-4 py-1 rounded-full
                 ${statusStyle(friend.status)}`}>
                {friend.status}
              </span>
            </div>

            <div className="pt-2 space-x-1 ">
              {friend.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-emerald-100 to-emerald-200 
        text-emerald-700 
        text-xs sm:text-sm 
        font-medium 
        px-3 sm:px-4 py-1 
        rounded-full 
        shadow-sm 
        hover:scale-105 hover:bg-emerald-300 
        transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bio */}
          <p className="text-gray-600 italic mb-2">
            {showFull ? friend.bio : friend.bio.slice(0, 50)}

            <span
              onClick={() => setShowFull(!showFull)}
              className="cursor-pointer text-gray-500"
            >
              {showFull ? " show less" : "...show more"}
            </span>
          </p>

          <p className="text-gray-500 text-sm pb-1.5">Email: {friend.email}</p>

          {/* Left Actions */}
          <div className="space-y-2">
            <button className="w-full bg-white border border-gray-200 hover:bg-gray-50 p-3 rounded-2xl flex items-center justify-center gap-2 transition">
              <RiNotificationSnoozeLine /> Snooze 2 Weeks
            </button>
            <button className="w-full bg-white border border-gray-200 hover:bg-gray-50  p-3 rounded-2xl flex items-center justify-center gap-2 transition">
              <FiArchive /> Archive
            </button>
            <button className="w-full bg-white border border-red-200 hover:bg-red-50 text-red-600  p-3 rounded-2xl flex items-center justify-center gap-2 transition">
              <RiDeleteBinLine /> Delete
            </button>
          </div>
        </div>

        {/* Right Side - Stats & Actions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <div className="text-4xl font-bold text-gray-900">{friend.days_since_contact}</div>
              <p className="text-gray-500 text-sm mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <div className="text-4xl font-bold text-gray-900">{friend.goal}</div>
              <p className="text-gray-500 text-sm mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <div className="text-4xl font-bold text-gray-900">
                {friend.next_due_date}
              </div>
              <p className="text-gray-500 text-sm mt-1">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white rounded-3xl shadow-sm p-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Relationship Goal</h3>
              <button className="text-sm border border-gray-300 hover:bg-gray-50 px-5 py-2 rounded-xl transition">
                Edit
              </button>
            </div>
            <p className="text-gray-700">
              Connect every <span className="font-semibold">30 days</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="">
            {/* Quick Check-In */}
            <div className="bg-white rounded-3xl shadow-sm p-8  ">
              <h3 className="font-semibold text-lg mb-6">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-4">
                <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-2xl transition">
                  <LuPhoneCall />
                  <span className="text-sm font-medium">Call</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-2xl transition">
                  <MdOutlineTextsms />
                  <span className="text-sm font-medium">Text</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-2xl transition">
                  <PiVideoCamera />
                  <span className="text-sm font-medium">Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
