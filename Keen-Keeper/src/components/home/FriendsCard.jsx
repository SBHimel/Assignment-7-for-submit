import React, { useContext, useEffect, useState } from "react";
import Friends from "../../ui/Friends";
import { PacmanLoader } from "react-spinners";
import { Link } from "react-router";
import { FriendsContext } from "../../context/FriendsContext";

const FriendsCard = () => {
  
  const { friends, loading } = useContext(FriendsContext);
  console.log(friends);

  /* status design */

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="pb-5">
        <h2 className="font-bold text-2xl ">Your Friends: {friends.length}</h2>
      </div>

      {/* Loading dekhenu */}

      {loading ? (
        <div className="flex flex-col justify-center items-center h-40 gap-3">
          <PacmanLoader color="#10b981" size={20} />
          <p className="text-sm font-bold text-gray-500">Loading data...</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <Link key={friend.id} to={`/friend/${friend.id}`}>
        <Friends frind={friend} />
      </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsCard;
