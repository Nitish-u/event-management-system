import React from "react";
import Login from "../../components/Login/login";
import Register from "../../components/Register/register";

export default function Auth() {
  // left to implement the login-signUp toggle which will be based on the url's path and state.
  return (
    <div className="h-dvh grid items-center">
      <div className="flex p-8 w-fit lg:w-[56rem] items-center relative justify-around m-auto shadow-2xl rounded-xl overflow-hidden">
        <Register className={"lg:block hidden"} />
        <Login />
        <div className="PageInfoCard absolute bg-blue-500 w-1/2 left-0 h-full p-10 text-white lg:block hidden">
          <h1 className="text-5xl font-bold leading-[76.8px]">Welcome back!</h1>
          <p>
            Log in to access your events, manage your tasks, and collaborate
            with your team. Enter your credentials to continue.
          </p>
        </div>
      </div>
    </div>
  );
}
