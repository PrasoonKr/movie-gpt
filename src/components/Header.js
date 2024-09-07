import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, password, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            password: password,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe the user when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);
  const handleGptSearchClick = () => {
    //Toggle Gpt search
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-screen px-12 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          <button
            className="bg-purple-900 relative top-1 font-medium my-2 px-2 hover:opacity-85 text-white rounded-lg mx-1"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "Gpt Search"}
          </button>
          <img
            className="relative top-2 w-11 h-11 mx-3"
            src={user?.photoURL}
            alt="user_icon"
          />

          <button onClick={handleSignOut} className="fond-bold text-white ">
            <p className="hover:underline">Sign Out</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
