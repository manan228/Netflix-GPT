import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { LOGO, SUPPORTED_LANGUAGES } from "../constants/constants";
import { removeUser } from "../utils/reducSlice/userSlice";
import { toggleGptSearchView } from "../utils/reducSlice/gptSlice";
import { changeLanguage } from "../utils/reducSlice/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const actionDispatchedRef = useRef(false);
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    if (location.pathname === "/gpt-search" && !actionDispatchedRef.current) {
      dispatch(toggleGptSearchView());
      actionDispatchedRef.current = true;
    }
  }, [dispatch, location.pathname]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
      localStorage.clear();
      navigate("/");
    } catch (error) {
      navigate("/error");
    }
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    showGptSearch ? navigate("/") : navigate("/gpt-search");
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        onClick={() => navigate("/browse")}
        className="w-44 mx-auto md:mx-0 cursor-pointer"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={(e) => dispatch(changeLanguage(e.target.value))}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
