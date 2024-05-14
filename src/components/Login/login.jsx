import React, { useState } from "react";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="w-fit">
      <h2 className="text-3xl font-bold text-center">Login</h2><br />
      <form action="" method="post" className="flex flex-col gap-4 select-none">
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          className="inputStyles"
        />
        <input
          type={showPass ? "text" : "password"}
          name="password"
          placeholder="password"
          required
          className="inputStyles"
        />
        <label
          htmlFor="showPassword"
          className="cursor-pointer"
          onClick={() => setShowPass(!showPass)}
        >
          <input type="checkbox" id="showPassword" /> Show password
        </label>
        <input type="submit" value="Sign in" className="inputStyles" />
      </form>
      <p className="text-center">new user? <a href="#">Register</a></p>
    </div>
  );
}
