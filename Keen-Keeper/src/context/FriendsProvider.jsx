import React, { useEffect, useState } from "react";
import { FriendsContext } from "./FriendsContext";


const FriendsProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState([]);

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


 return (
    <FriendsContext.Provider value={{friends, setFriends, loading,setLoading}}>
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendsProvider;
