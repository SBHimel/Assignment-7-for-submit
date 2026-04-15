import React, { useEffect, useState } from "react";
import { FriendsContext } from "./FriendsContext";


const FriendsProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState([]);
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log(data);
      setTimeout(() => {
        setFriends(data);
        setLoading(false); // data আসলে loading off
      }, 700);
    };
    fetchData();
  }, []);

  console.log(friends, "frinds data");
  console.log(loading, "Loading");


  const statusStyle = (status) => {
    if (status === "on-track") {
      return "bg-green-800 text-white";
    } else if (status === "overdue") {
      return "bg-red-600 text-white";
    } else {
      return "bg-yellow-500 text-white";
    }
  };


 return (
    <FriendsContext.Provider value={{friends, setFriends, loading, setLoading, statusStyle, setTimelineData, timelineData}}>
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendsProvider;
