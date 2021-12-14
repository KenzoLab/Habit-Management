import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Footer, Nav, Header } from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RadarOutlinedIcon from "@mui/icons-material/RadarOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../assets/habitLogo.png";
function HamburguerMenu() {
  const [toggleNav, setToggleNav] = useState(false);

  function handleClick() {
    setToggleNav(!toggleNav);
  }

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
              <Link>Dashboard</Link>
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
              <Link>Groups</Link>
            </li>
            <li>
              <Link>
                {" "}
                <BorderColorIcon
                  sx={{
                    width: 35,
                    height: 35,
                    mr: 3,
                    color: "#081140",
                  }}
                />
                Activities
              </Link>
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
              <Link>Goals</Link>
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
              <Link>Logout</Link>
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
