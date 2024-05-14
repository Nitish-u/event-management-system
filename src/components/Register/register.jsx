import React, { useState } from "react";

export default function Register({className = ""}) {
  return (
    <div className={`w-fit ${className}`}>
      <h2 className="text-3xl font-bold text-center">Register</h2>
      <br />
      <form action="" method="post" className="flex flex-col gap-4 select-none">
        <input
          type="text"
          name="name"
          placeholder="first name"
          required
          className="inputStyles"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          className="inputStyles"
        />
        <input
          type="password"
          name="password"
          placeholder="set Password"
          required
          className="inputStyles"
        />
        <input
          type="text"
          name="confirmPassword"
          placeholder="confirm password"
          required
          className="inputStyles"
        />
        <input type="submit" value="Sign up" className="inputStyles" />
      </form>
      <p className="text-center">
        Already have an account? <a href="#">Login</a>
      </p>
    </div>
  );
}
