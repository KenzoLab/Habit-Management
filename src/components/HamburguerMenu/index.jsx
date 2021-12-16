import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Footer, Nav, Header } from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import RadarOutlinedIcon from "@mui/icons-material/RadarOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../assets/habitLogo.png";
import EditIcon from "@mui/icons-material/Edit";
import { useParams } from "react-router-dom";

function HamburguerMenu() {
  const [currentPage, setCurrentPage] = useState("");
  const [toggleNav, setToggleNav] = useState(false);

  function handleClick() {
    setToggleNav(!toggleNav);
  }

  const { id } = useParams();
  console.log({ id });
  return (
    <Nav currentPage="dashboard" toggleNav={toggleNav}>
      <Header currentPage="activities">
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
              <p className="username">Nome</p>
              <p className="useremail">Email</p>
            </div>
          </section>
        </Footer>
      </div>
    </Nav>
  );
}

export default HamburguerMenu;
