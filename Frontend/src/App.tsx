import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useContext, useEffect } from "react";

import AudioBox from "./audioComponents/AudioBox";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import FriendProfilePage from "./pages/FriendProfilePage";
import NewSong from "./pages/NewSong";
import EditSong from "./pages/EditSong";
import About from "./pages/About";
import InvalidRoute from "./pages/InvalidRoute";

import { AuthContext } from "./context/AuthContext";

import "./invisibleScrollbar.css";
import "../styles.css";

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error(
      "useAuthContext cannot be used outisde the scope of the useAuthContext context!"
    );
  }

  return context;
};

function App() {
  let authContext = useAuthContext();

  useEffect(() => {
    // log user in if still authenticated

    let user = localStorage.getItem("user");

    if (!user) {
      // user is not authenticated
      authContext.dispatch({ type: "LOGOUT", payload: {} });
      return;
    } else {
      // check that token is still valid before logging in

      const token = JSON.parse(user).token;
      const tokenCreationTime = JSON.parse(user).tokenCreationTime;

      const verifyToken = async () => {
        const isTokenExpired =
          Math.abs(Date.now() - parseInt(tokenCreationTime)) > 259200000; // If longer than 3 days in ms, invalidate token

        if (isTokenExpired) {
          localStorage.removeItem("user");
          authContext.dispatch({ type: "LOGOUT", payload: {} });
          return;
        } else {
          authContext.dispatch({ type: "LOGIN", payload: JSON.parse(user!) }); // set context state to stored user
          return;
        }
      };

      verifyToken();
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/myProfile" element={<UserProfile />} />
            <Route
              path="/userProfile/:id"
              element={<FriendProfilePage />}
            ></Route>
            <Route path="/newSong" element={<NewSong />} />
            <Route path="/editSong" element={<EditSong />} />
            <Route path="/about" element={<About />} />
            <Route path="/404" element={<InvalidRoute />} />
            <Route path="*" element={<Navigate to="/404" />} />{" "}
            {/* Catch all for unregistered routes */}
          </Routes>
      </BrowserRouter>
      <div className='footer'>
        <p>ProdLodge, Aman Koua - 2023</p>
        <p>
          Original Author: <a href='https://github.com/AmanKoua/' target="_blank">AmanKoua</a><br />
          Frontend Rework done by: <a href='https://github.com/greysonflippo1/' target="_blank">GreysonFlippo1</a>
        </p><br/>
      </div>
    </div>
  );
}

export default App;
