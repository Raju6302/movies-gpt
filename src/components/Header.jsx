import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { DEFAULT_AVATAR, LOGO_IMG, MULTI_LANGUAGE } from "../utils/constant";
import { gptSearchViewToggle } from "../redux/gptSearchSlice";
import { changeLanguage } from "../redux/languageConfigSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearchToggleView = useSelector(
    (store) => store.gptSearch.gptSearchView
  );
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
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
    //unsubscribe when component is unmount
    return () => unsubscribe();
  }, []);

  const handleSearchGPT = () => {
    dispatch(gptSearchViewToggle());
  };

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO_IMG} alt="logo" />
      {user && (
        <div className="flex p-2">
         {gptSearchToggleView && <select
            className="p-2 m-2 bg-gray-900 text-white"
            onChange={handleChangeLanguage}
          >
            {MULTI_LANGUAGE.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            className=" m-2 py-1 px-2 rounded-lg text-white cursor-pointer bg-violet-600"
            onClick={handleSearchGPT}
          >
           {gptSearchToggleView ? "Home Page" : "GPT Search"} 
          </button>

          <img
            className="w-10 m-2 rounded-[50%]"
            alt="avatar"
            src={user?.photoURL || DEFAULT_AVATAR}
          />
          <button
            onClick={handleSignOut}
            className="cursor-pointer font-bold text-red-500"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
