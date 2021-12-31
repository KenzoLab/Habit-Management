import { useEffect, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import RadarOutlinedIcon from "@mui/icons-material/RadarOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import BasicSpeedDial from "../SpeedDialHabits";
import { FaUserEdit, FaUserCog } from "react-icons/fa";

import logo from "../../assets/habitLogo.png";
import { useAuth } from "../../providers/AuthProvider";
import { useCurrentPage } from "../../providers/CurrentPage";
import {
  Footer,
  Nav,
  Header,
  StyledLink,
  LogoutButton,
  NewAvatar,
  ContainerAvatar,
} from "./styles";
import EditIcon from "@mui/icons-material/Edit";
import { genConfig } from "react-nice-avatar";

import ModalProfile from "../ProfileModal";
import ModalAvatar from "../AvatarModal";

const defaultConfig = {
  sex: "man",
  faceColor: "#F9C9B6",
  earSize: "small",
  eyeStyle: "smile",
  noseStyle: "round",
  mouthStyle: "laugh",
  shirtStyle: "polo",
  glassesStyle: "none",
  hairColor: "#000",
  hairStyle: "thick",
  hatStyle: "none",
  hatColor: "#fff",
  eyeBrowStyle: "up",
  shirtColor: "#F4D150",
  bgColor: "linear-gradient(90deg, #36cd1c 0%, #68deff 100%)",
};

function HamburguerMenu() {
  //CONFIG AVATAR
  const [myConfig, setMyConfig] = useState(
    JSON.parse(localStorage.getItem("@Habit:myAvatar")) || defaultConfig,
  );
  const config = genConfig(myConfig);

  const actions = [
    { icon: <FaUserEdit />, name: "Edit Avatar" },
    { icon: <FaUserCog />, name: "Edit Profile" },
  ];

  const speedIcon = (
    <ContainerAvatar>
      <NewAvatar {...config} />
    </ContainerAvatar>
  );

  const [openModalEditProfile, setOpenModalEditProfile] = useState(false);
  const [openModalEditAvatar, setOpenModalEditAvatar] = useState(false);

  const handleModalEditAvatar = () => {
    setOpenModalEditAvatar(!openModalEditAvatar);
  };

  const handleModalEditProfile = () => {
    setOpenModalEditProfile(!openModalEditProfile);
  };

  const { getUserInfo, userInfo, logoutFunction } = useAuth();
  const { currentPage } = useCurrentPage();

  const [toggleNav, setToggleNav] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [userId, setUserId] = useState(() => {
    const id = localStorage.getItem("@Habit:userId");
    return id ? id : null;
  });

  function handleClick() {
    setToggleNav(!toggleNav);
  }

  useEffect(() => {
    getUserInfo(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <StyledLink to="/dashboard">
                <HomeOutlinedIcon
                  sx={{
                    width: 35,
                    height: 35,
                    mr: 3,
                    color: "var(--darkBlue)",
                  }}
                />
                Dashboard
              </StyledLink>
            </li>
            <li className="groups">
              <StyledLink to="/groups">
                <PeopleOutlineIcon
                  sx={{
                    width: 35,
                    height: 35,
                    mr: 3,
                    color: "var(--darkBlue)",
                  }}
                />
                Groups
              </StyledLink>
            </li>
            <li className="activities">
              <StyledLink to="/activities">
                <EditIcon
                  sx={{
                    width: 35,
                    height: 35,
                    mr: 3,
                    color: "var(--darkBlue)",
                  }}
                />
                Activities
              </StyledLink>
            </li>
            <li className="goals">
              <StyledLink to="/goals">
                <RadarOutlinedIcon
                  sx={{
                    width: 35,
                    height: 35,
                    mr: 3,
                    color: "var(--darkBlue)",
                  }}
                />
                Goals
              </StyledLink>
            </li>
            <li onClick={() => logoutFunction()}>
              <LogoutButton className="logout-button">
                <LogoutIcon
                  sx={{
                    width: 35,
                    height: 35,
                    mr: 3,
                    color: "var(--darkBlue)",
                  }}
                />
                Logout
              </LogoutButton>
            </li>
          </ul>
        </section>
        <Footer>
          <section>
            <BasicSpeedDial
              handleModal={[handleModalEditAvatar, handleModalEditProfile]}
              actions={actions}
              speedIcon={speedIcon}
              sx={{ position: "fixed", bottom: -20, right: 15 }}
            />
            <div>
              <p className="username">
                {userInfo?.username?.substring(0, 9)}...
              </p>
              <p className="userEmail">
                {userInfo?.email?.substring(0, 12)}...{" "}
              </p>
            </div>
          </section>
        </Footer>
      </div>
      <ModalProfile
        open={openModalEditProfile}
        handle={handleModalEditProfile}
      />
      <ModalAvatar
        open={openModalEditAvatar}
        handle={handleModalEditAvatar}
        myConfig={myConfig}
        setMyConfig={setMyConfig}
      />
    </Nav>
  );
}

export default HamburguerMenu;
