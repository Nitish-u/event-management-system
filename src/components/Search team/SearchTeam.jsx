import React from "react";

export default function SearchTeam() {
  return (
    <div className="findTeamComp p-8 m-auto flex flex-col gap-4 text-white bg-slate-400 bg-opacity-50 rounded-3xl">
      <h1 className="text-center text-6xl font-bold">Find your team</h1>
      <p className="text-center">Discover and join teams to collaborate on exciting events and projects.</p>
      <form action="" className="flex gap-4 text-black">
        <input
          type="text"
          name="teamInfo"
          placeholder="Enter your team name or team id..."
          className="w-96 p-2 rounded-xl"
        />
        <input type="submit" value="Find my team" className="bg-blue-500 p-4 py-2 text-white rounded-xl" onSubmit={e => e.preventDefault()} />
      </form>
    </div>
  );
}
