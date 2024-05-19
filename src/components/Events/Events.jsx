// we have to make change in the imporant task section according to this component in making the component more responsive and also we have to change some coloring of the component and add icons accordingly.

import React, { useState } from "react";
import { BiExpandVertical } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { GrLocationPin } from "react-icons/gr";
import { FcMediumPriority } from "react-icons/fc";

export default function Events() {
  const [taskDescription, setTaskDescritption] = useState(false);
  const heading = "Event name";
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repudiandae quis non ratione nostrum ipsa quas! Rem magni, iure eum quisquam repellendus illum iusto nemo consequatur quos ipsam totam quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repudiandae quis non ratione nostrum ipsa quas! Rem magni, iure eum quisquam repellendus illum iusto nemo consequatur quos ipsam totam quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repudiandae quis non ratione nostrum ipsa quas! Rem magni, iure eum quisquam repellendus illum iusto nemo consequatur quos ipsam totam quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repudiandae quis non ratione nostrum ipsa quas! Rem magni, iure eum quisquam repellendus illum iusto nemo consequatur quos ipsam totam quaerat.";
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
  const eventDate = `${currentDate.getDate()} ${monthNames[
    currentDate.getMonth()
  ].toUpperCase()} ${currentDate.getFullYear()}`;
  const venue = "G-B Sadak";
  return (
    <div className="parentConatiner xl:w-3/4 h-1/2 flex gap-4 flex-col md:flex-row">
      <div className="eventsSection md:w-1/2 w-full">
        <div className="text-2xl font-bold leading-10 px-1">Events</div>
        <div className="eventsContainer border-2 border-black h-full p-2 rounded-xl flex flex-col gap-3">
          <div
            className="event flex flex-col gap-2 p-2 rounded-[4px] md:flex-row"
            style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,0.3)" }}
            onClick={() => setTaskDescritption(!taskDescription)}
          >
            <div className="eventDetails">
              <div className="heading text-lg font-semibold line-clamp-1">
                {heading}
              </div>
              <div className="description text-sm line-clamp-2 md:line-clamp-3">
                {description}
              </div>
            </div>
            <div className="impEventInfo text-white flex text-center gap-1 font-semibold md:flex-col flex-col xs:flex-row">
              <div className="eventTakeOff bg-green-700 p-1 flex-1 rounded-md text-nowrap flex justify-center  md:px-3  items-center gap-2">
                <SlCalender size="1rem" />
                {eventDate}
              </div>
              <div className="venue bg-[#e0f7fa] text-[#333333]  p-1 flex-1 rounded-md text-nowrap md:flex-initial flex justify-center items-center gap-1">
                <GrLocationPin size="1rem" />
                {venue.slice(0, 10)}
                {venue.length > 10 ? "..." : ""}
              </div>
            </div>
            <div
              className="expansionIcon p-2 bg-blue-500 rounded-md text-white hover:bg-blue-700 cursor-pointer flex items-center gap-1 justify-center"
              onClick={() => setTaskDescritption(!taskDescription)}
            >
              <span className="md:hidden">Expand </span>
              <BiExpandVertical size="1rem" />
            </div>
          </div>
        </div>
      </div>
      <div className="allTasksSection md:w-1/2 w-full">
        <div className="text-2xl font-bold leading-10 px-1">All Tasks</div>
        <div className="tasksContainer border-2 border-black h-full p-2 rounded-xl flex flex-col gap-3">
          <div
            className="task flex flex-col gap-2 p-2 rounded-[4px] lg:flex-row"
            style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,0.3)" }}
          >
            <div className="taskDetails">
              <div className="heading text-lg font-semibold line-clamp-1">
                {heading}
              </div>
              <div className="description text-sm line-clamp-2 md:line-clamp-3">
                {description}
              </div>
              <div className="flags flex overflow-hidden w-full gap-1 mt-1 flex-wrap">
                <span className="flag text-[10px] p-[1px] px-3 border-[1px] border-black rounded-full grid items-center">
                  Assigned
                </span>
                <span className="flag text-[10px] p-[1px] px-3 border-[1px] border-black rounded-full grid items-center">
                  Up for grab
                </span>
                <span className="flag text-[10px] p-[1px] px-3 border-[1px] border-black rounded-full grid items-center">
                  UI
                </span>
                <span className="flag text-[10px] p-[1px] px-3 border-[1px] border-black rounded-full grid items-center">
                  ReactJs
                </span>
                <span className="flag text-[10px] p-[1px] px-[2px] border-[1px] border-black rounded-full grid items-center">
                +4
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-4 items-center flex-col xs:flex-row w-full ">
              <div
                className="priority flex lg:flex-col items-center justify-center xs:w-fit rounded-md h-full w-full p-2 gap-1"
                style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,0.1)" }}
              >
                <FcMediumPriority size={window.innerWidth < 1024 ? (window.innerWidth < 768) ? "1rem"  : "1.5rem" : "3rem" } />
                Moderate
              </div>
              <div
                className="expansionIcon h-full flex-1 w-full bg-blue-500 rounded-md text-white hover:bg-blue-700 cursor-pointer flex items-center gap-1 justify-center xs:max-w-fit p-2"
                onClick={() => setTaskDescritption(!taskDescription)}
              >
                <span className="lg:hidden">Expand </span>
                <BiExpandVertical size="1rem" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
