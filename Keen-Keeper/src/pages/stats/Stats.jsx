import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendsContext } from "../../context/FriendsContext";

const Stats = () => {
  const { timelineData, friends } = useContext(FriendsContext);
  console.log(timelineData, "time-data");
  console.log(friends, "all-friends");

  const callCount = timelineData.filter(
    (item) => item.action === "call",
  ).length;

  const textCount = timelineData.filter(
    (item) => item.action === "text",
  ).length;

  const videoCount = timelineData.filter(
    (item) => item.action === "video",
  ).length;

  const data = [
    { name: "Call", value: callCount, fill: "#184B44" },
    { name: "Text", value: textCount, fill: "#52a447" },
    { name: "Video", value: videoCount, fill: "#663399" },
  ];

  return (
    <div className="py-8">
      <h2 className="font-bold text-3xl mb-8 container mx-auto">
        Friendship Analytics 
      </h2>

      <div className=" my-10 shadow p-10 rounded-md border border-slate-300 container mx-auto">
        <div>
            <h4 className="font-semibold pl-4 text-[20px]">By Interaction Type</h4>
            <h5 className="text-[16px] font-semibold p-4 text-gray-500">Total activities recorded: {timelineData.length}</h5>
        </div>
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "40vh",
            margin: "auto",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend></Legend>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;
