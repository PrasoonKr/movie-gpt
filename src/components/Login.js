import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_LOGO, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;

    // sign in signup
    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, password, displayName, photoURL } =
                auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  password: password,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrorMsg(errorCode );
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
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrorMsg(errorCode );
        });
    }
  };
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-screen object-cover h-screen">
        <img src={BG_LOGO} alt="bg_logo" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl pb-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 bg-opacity-60 rounded-lg "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 bg-opacity-60 rounded-lg "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-800 bg-opacity-60 rounded-lg border-solid border-1 border-white"
        />
        <p className="text-red-600">{errorMsg}</p>
        <button
          className="p-3 my-6 hover:opacity-85 bg-red-700 w-full font-medium rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-1 cursor-pointer hover:underline" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
