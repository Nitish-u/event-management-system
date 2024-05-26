import React from "react";
import { FcMediumPriority } from "react-icons/fc";
import { BiExpandVertical } from "react-icons/bi";

export default function AllTasks() {
    const heading = "Event name";
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repudiandae quis non ratione nostrum ipsa quas! Rem magni, iure eum quisquam repellendus illum iusto nemo consequatur quos ipsam totam quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repudiandae quis non ratione nostrum ipsa quas! Rem magni, iure eum quisquam repellendus illum iusto nemo consequatur quos ipsam totam quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repudiandae quis non ratione nostrum ipsa quas! Rem magni, iure eum quisquam repellendus illum iusto nemo consequatur quos ipsam totam quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repudiandae quis non ratione nostrum ipsa quas! Rem magni, iure eum quisquam repellendus illum iusto nemo consequatur quos ipsam totam quaerat.";
  return (
    <div className="allTasksSection md:w-1/2 w-full">
      <div className="text-2xl font-bold leading-10 px-1">All Tasks</div>
      <div className="tasksContainer border-2 border-black p-2 rounded-xl flex flex-col gap-3 overflow-auto" style={{height: "calc(100% - 2.5rem)"}}>
        <div
          className="task flex flex-col p-2 rounded-[4px] lg:flex-row justify-between gap-2"
          style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,0.3)" }}
        >
          <div className="taskDetails w-full">
            <div className="heading text-lg font-semibold line-clamp-1">
              {heading}
            </div>
            <div className="description text-sm line-clamp-2">
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
          <div className="flex justify-center gap-4 items-center flex-col xs:flex-row lg:w-fit ">
            <div
              className="priority flex lg:flex-col items-center justify-center xs:w-fit rounded-md h-full w-full p-2 gap-1"
              style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,0.1)" }}
            >
              <FcMediumPriority
                size={
                  window.innerWidth < 1024
                    ? window.innerWidth < 768
                      ? "1rem"
                      : "1.5rem"
                    : "3rem"
                }
              />
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
  );
}
