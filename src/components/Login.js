import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateCreds } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validationMsg, setValidationMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullNameRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm((value) => !value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    const message = isSignInForm
      ? validateCreds(
          emailRef.current.value,
          passwordRef.current.value,
          "sign in form"
        )
      : validateCreds(
          emailRef.current.value,
          passwordRef.current.value,
          fullNameRef.current.value
        );
    setValidationMsg(message);
    if (message) return;

    // sign in/sign up logic
    if (isSignInForm) {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          setValidationMsg(errorMessage);
        });
    } else {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: fullNameRef.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then((userData) => {
              const { uid, displayName, photoURL, email } = auth.currentUser;
              dispatch(addUser({ uid, displayName, photoURL, email }));
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          setIsSignInForm(true);
          navigate("/browse");
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setValidationMsg(errorMessage);
          // ..
        });
    }
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
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              ref={fullNameRef}
              placeholder="Full Name"
              className="mt-4 border-2 text-white   bg-transparent  w-64 border-gray-200 rounded-sm p-2 text-sm focus:outline-none focus:border-blue-300"
            />
          )}
          <input
            type="text"
            ref={emailRef}
            placeholder="Email or Mobile Number"
            className=" mt-4 border-2 text-white  bg-transparent  w-64 border-gray-200 rounded-sm p-2 text-sm focus:outline-none focus:border-blue-300"
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Password"
            className="mt-4 border-2 text-white   bg-transparent  w-64 border-gray-200 rounded-sm p-2 text-sm focus:outline-none focus:border-blue-300"
          />
          <p className="text-red-400 w-64">{validationMsg && validationMsg}</p>
          <button
            type="submit"
            className="mt-4 bg-blue-300 text-white rounded-sm p-2 text-sm w-64 bg-red-600"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
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
