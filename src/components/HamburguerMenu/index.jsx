import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Footer, Nav, Header } from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RadarOutlinedIcon from "@mui/icons-material/RadarOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../assets/habitLogo.png";
import { useAuth } from "../../providers/AuthProvider";
import api from "../../services/api";

function HamburguerMenu() {
  const [toggleNav, setToggleNav] = useState(false);

  const { getUserInfo, userInfo } = useAuth();

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
    <Nav toggleNav={toggleNav}>
      <Header>
        <button onClick={() => handleClick()}>
          <MenuIcon
            sx={{
              width: 35,
              height: 35,
            }}
          />
        </button>
        <img src={logo} alt="Logo HabitTracker"></img>
      </Header>
      <div className="menu-list">
        <section>
          <ul>
            <li>
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
            <li>
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
            <li>
              <BorderColorIcon
                sx={{
                  width: 35,
                  height: 35,
                  mr: 3,
                  color: "#081140",
                }}
              />
              <Link to="/activities">Activities</Link>
            </li>
            <li>
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
            <li>
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
                mr: 3,
              }}
            />
            <div>
              <p className="username">{userInfo.username}</p>
              <p className="useremail">{userInfo.email}</p>
            </div>
          </section>
        </Footer>
      </div>
    </Nav>
  );
}

export default HamburguerMenu;
