import React from "react";
import AssignedTasks from "../../components/Assigned tasks/AssignedTasks";
import Events from "../../components/Events/Events";
import AllTasks from "../../components/All Tasks/AllTasks";

export default function Dashboard() {
  return (
    <div className="flex p-4 h-dvh">
      <div className="flex flex-col h-full">
        <div className="parentConatiner xl:w-3/4 h-1/2">
          <AssignedTasks />
        </div>
        <div className="parentConatiner xl:w-3/4 h-1/2 flex gap-4 flex-col md:flex-row">
          <Events />
          <AllTasks />
        </div>
      </div>
    </div>
  );
}
