import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import RadarOutlinedIcon from "@mui/icons-material/RadarOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import logo from "../../assets/habitLogo.png";
import { useAuth } from "../../providers/AuthProvider";
import { useCurrentPage } from "../../providers/CurrentPage";
import { Footer, Nav, Header } from "./styles";
import EditIcon from "@mui/icons-material/Edit";

function HamburguerMenu() {
  const { getUserInfo, userInfo, logoutFunction } = useAuth();
  const { currentPage } = useCurrentPage();

  const [toggleNav, setToggleNav] = useState(false);
  const [userId, setUserId] = useState(() => {
    const id = localStorage.getItem("@Habit:userId");
    return id ? id : null;
  });

  function handleClick() {
    setToggleNav(!toggleNav);
  }

  useEffect(() => {
    getUserInfo(userId);
  }, []);

  return (
    <Nav currentPage={currentPage} toggleNav={toggleNav}>
      <Header currentPage={currentPage}>
        <div onClick={() => handleClick()}></div>

        <img src={logo} alt="Logo HabitTracker"></img>
      </Header>
      <div className="menu-list">
        <section>
          <ul>
            <li className="dashboard">
              <HomeOutlinedIcon
                sx={{
                  width: 35,
                  height: 35,
                  mr: 3,
                  color: "#081140",
                }}
              />
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="groups">
              <PeopleOutlineIcon
                sx={{
                  width: 35,
                  height: 35,
                  mr: 3,
                  color: "#081140",
                }}
              />
              <Link to="/groups">Groups</Link>
            </li>
            <li className="activities">
              <EditIcon
                sx={{
                  width: 35,
                  height: 35,
                  mr: 3,
                  color: "#081140",
                }}
              />
              <Link to="/activities">Activities</Link>
            </li>
            <li className="goals">
              <RadarOutlinedIcon
                sx={{
                  width: 35,
                  height: 35,
                  mr: 3,
                  color: "#081140",
                }}
              />
              <Link to="/goals">Goals</Link>
            </li>
            <li onClick={() => logoutFunction()}>
              <LogoutIcon
                sx={{
                  width: 35,
                  height: 35,
                  mr: 3,
                  color: "#081140",
                }}
              />
              <button className="logout-button">Logout</button>
            </li>
          </ul>
        </section>
        <Footer>
          <section>
            <AccountCircleIcon
              sx={{
                width: 50,
                height: 50,
                mr: 0.5,
              }}
            />
            <div>
              <p className="username">
                {userInfo?.username?.substring(0, 9)}...
              </p>
              <p className="useremail">
                {userInfo?.email?.substring(0, 12)}...{" "}
              </p>
            </div>
          </section>
        </Footer>
      </div>
    </Nav>
  );
}

export default HamburguerMenu;
