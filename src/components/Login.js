import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm((value) => !value);
  };
  return (
    <div className="relative bg-gradient-to-b from-black">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
        alt="bg iamge"
        className="login-background"
      />
      <div className="flex justify-center items-center w-full h-lvh">
        <form className="flex justify-center items-center flex-col w-72 bg-black bg-opacity-50 pb-8">
          <h1 className="text-white mr-auto pl-2 pt-4 pb-4 capitalize font-bold">
            {isSignInForm ? "Sign In" : "Sign Out"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="mt-4 border-2 text-white   bg-transparent  w-64 border-gray-200 rounded-sm p-2 text-sm focus:outline-none focus:border-blue-300"
            />
          )}
          <input
            type="text"
            placeholder="Email or Mobile Number"
            className=" mt-4 border-2 text-white  bg-transparent  w-64 border-gray-200 rounded-sm p-2 text-sm focus:outline-none focus:border-blue-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-4 border-2 text-white   bg-transparent  w-64 border-gray-200 rounded-sm p-2 text-sm focus:outline-none focus:border-blue-300"
          />
          <button
            type="submit"
            className="mt-4 bg-blue-300 text-white rounded-sm p-2 text-sm w-64 bg-red-600"
            // onClick={}
          >
            {isSignInForm ? "Sign In" : "Sign Out"}
          </button>
          <p className="mt-4 text-sm text-white" onClick={toggleSignInForm}>
            {isSignInForm
              ? " New To Netflix? Sign up now"
              : " Already on Netflix? Sign in now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
