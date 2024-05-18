import React, { useState } from "react";
import { BiExpandVertical } from "react-icons/bi";

export default function AssignedTasks() {
  const [taskDescription, setTaskDescritption] = useState(false);
  const heading =
    "Task heading: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium obcaecati quo corporis voluptatum odit fugit, doloremque maxime accusantium ipsum saepe, quis aspernatur esse inventore qui, ull";
  const description =
    "Task description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium obcaecati quo corporis voluptatum odit fugit, doloremque maxime accusantium ipsum saepe, quis aspernatur esse inventore qui, ullam libero necessitatibus tempore?";
  const priority = "Moderate"; //can be moderate and low as well
  const team = [
    { id: 1, Name: "Nitish upadhyay" },
    { id: 2, Name: "ujwal thakur" },
    { id: 3, Name: "orthopoda" },
    { id: 4, Name: "Abhishek mishra" },
    { id: 5, Name: "Nitin sharma" },
  ];
  const currentDate = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const deadline = `${currentDate.getDate()} ${monthNames[
    currentDate.getMonth()
  ].toUpperCase()}`;
  return (
    <div className="parentConatiner xl:w-3/4 h-1/2">
      <h1 className="text-2xl font-bold leading-10 px-1">Assigned Tasks</h1>
      <div className="tasksContainer border-2 border-black h-full p-2 rounded-xl flex flex-col gap-3">
        <div id="fksdjflk" className="task p-2 rounded-[4px] flex flex-col md:flex-row  gap-2" style={{boxShadow: '0 0 8px 0 rgba(0,0,0,0.3)'}} onClick={() => setTaskDescritption(!taskDescription)}>
        {/* <div className="task border-2 border-black p-2 rounded-[4px] flex flex-col gap-2"> */}
          <div className="taskDetails">
            <div className="heading text-lg font-semibold line-clamp-1">
              {heading}
            </div>
            <div className="description text-sm line-clamp-2 md:line-clamp-3">
              {description}
            </div>
          </div>
          <div className="impDetails flex gap-1 text-white md:flex-col md:w-72">
            <div className={`priority flex-1 text-center ${
                priority.toLocaleUpperCase() == "HIGH"
                  ? "bg-red-500"
                  : priority.toLocaleUpperCase() == "MODERATE"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              } py-1 rounded-md md:flex-none`}>{priority}</div>
            <div className="deadline flex-1 text-center bg-black py-1 rounded-md md:flex-none">{deadline}</div>
            {team.length !== 0 ?
            <div className="otherMembers flex-1 text-center bg-black py-1 rounded-md">
              {team.length > 1 ?  team[0].Name.slice(0, 8) + "... +" + (team.length - 1) : team[0].Name.slice(0, 10) + "..."}
            </div> :
            <div className="otherMembers flex-1 text-center bg-black py-1 rounded-md md:flex-none">
              Only you
            </div>
            }
          </div>
          <div className="expansionIcon p-2 bg-blue-500 rounded-md text-white hover:bg-blue-700 cursor-pointer flex items-center gap-1 justify-center" onClick={() => setTaskDescritption(!taskDescription)}>
            <span className="md:hidden">Expand </span><BiExpandVertical size="1rem" />
          </div>
        </div>
      </div>
    </div>
  );
}