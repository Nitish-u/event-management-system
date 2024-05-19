import React from "react";
import AssignedTasks from "../../components/Assigned tasks/AssignedTasks";
import Events from "../../components/Events/Events";

export default function Dashboard() {
  return (
    <>
      <AssignedTasks />
      <Events />
    </>
  );
}
