// import { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Collapse } from "reactstrap";
import { logoutUser } from "../../../Redux/apiReques";
import "./navbar.css";
import { useEffect, useState } from "react";
import { createAxios } from "../../../createInstance";
import { logoutSuccess } from "../../../Redux/authSlice";
import ModalTrailer from "../../Popup/ModalTrailer/modaltrailer";
import logo from "../../../Assets/Images/App/logo.png";

function NavBar() {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const accessToken = user?.accessToken;
  const id = user?.ID_User;
  let axiosJWT = createAxios(user, dispatch, logoutSuccess);
  const handleLogout = () => {
    logoutUser(dispatch, id, accessToken, axiosJWT, history);
  };

  const [openF, setOpenF] = useState(false);
  const handleToggleF = (event) => setOpenF(!openF);
  let buttons;

  return (
    <nav className="navbar navbar-expand navbar-light fixed-top">
      <div className="nav-left-side">
        <div>
          <Link to={"/"}>
            <img className="navbar-logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-search">
          <input
            type="text"
            class="navbar-search-input"
            id="navbar-search-input"
            placeholder="Search film..."
          />
          <button class="navbar-search-btn">
            <i
              class="fas fa-search navbar-search-btn-icon"
              id="navbar-search-btn-icon"
              alt="search"
            />
          </button>
        </div>

        <ModalTrailer openF={openF} handleToggleF={handleToggleF} />
      </div>

      <div className="nav-right-side ">
        <Link className="menu" to={"/allmovie"}>
          <img
            src="http://simpleicon.com/wp-content/uploads/film-3.png"
            className="menu-icon"
            alt=""
          />
          Phim
        </Link>
        <div className="menu thongbao " onClick={handleToggleF}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png"
            alt=""
            className="menu-icon"
          />
          Thông báo
        </div>
        <a href={"#tin"} className=" menu">
          <img
            src="https://cdn-icons-png.flaticon.com/512/464/464214.png"
            alt=""
            className="menu-icon"
          />{" "}
          Tin tức
        </a>
        {buttons}

        {user ? (
          <>
            <div className="name-user">Hi,{user.User_Name}</div>
            <div>
              {/* <img src="https://i.ibb.co/PCjW83Y/avt.png" className="avt" /> */}

              <div className="dropdown">
                <i className=" fa fa-solid fa-caret-down dropbtn"></i>
                <div className="drop-down-item dropdown-content">
                  <Link to={"/setting"}>Tài Khoản</Link>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Link to={"/login"}>
            <div navbar>
              <img src="https://i.ibb.co/PCjW83Y/avt.png" className="avt" />
              <button className="navbar-btn" id="btnSignUp">
                LOGIN
              </button>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
