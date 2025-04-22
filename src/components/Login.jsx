import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  
  const [isSignIn, setIsSignIn] = useState(true);
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleFormSubmit = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setMessage(message);
    if (message != null) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/137879456?v=4",
          })
            .then(() => {
               const { uid, email, displayName, photoURL } = auth.currentUser;
                      dispatch(
                        addUser({
                          uid: uid,
                          email: email,
                          displayName: displayName,
                          photoURL: photoURL,
                        })
                      );
              navigate("/browse");
            })
            .catch((error) => {
              setMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <div>
        <Header />
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc2c345e-5991-4917-be24-cd328b62cc3f/web_tall_panel/IN-en-20250414-TRIFECTA-perspective_0f1fb403-6efb-4223-8f10-cfd1a902f22c_large.jpg"
          alt="backgroud"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black/70 my-36 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="font-black text-3xl py-4">
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-white text-black"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Phone or Email Address"
          className="p-4 my-4 w-full bg-white text-black"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-white text-black"
        />
        <p className="text-red-500 font-bold text-xxl">{message}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full cursor-pointer"
          onClick={handleFormSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={handleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign Ip Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
