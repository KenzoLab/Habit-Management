import styled from "styled-components";
import home from "../../assets/home.png";
import groups from "../../assets/groups.png";
import activities from "../../assets/edit.png";
import goals from "../../assets/goals.png";
import { Link } from "react-router-dom";
import Avatar from "react-nice-avatar";

const Page = (props) => props.currentPage;

export const Nav = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 1rem 0;
  align-items: center;
  flex-direction: column;

  justify-content: center;
  background-color: var(--whiteSmoke);
  z-index: 100;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: ${(props) => (props.toggleNav ? "100vh" : "15vh")};

  ul {
    display: flex;
    list-style: none;
    gap: 0.5rem;

    Link {
      display: block;
      padding: 0.5rem;
      font-size: 23px;
    }
  }

  button {
    display: ${(props) => (props.toggleNav ? "block" : "block")};
  }

  .menu-list {
    display: ${(props) => (props.toggleNav ? "flex" : "none")};
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 0 14px 25px;
    width: 80vw;
    height: 86.6vh;

    @media (max-width: 767px) {
      padding: 25px 5px 25px 5px;
    }

    section {
      display: ${(props) => (props.toggleNav ? "flex" : "none")};
      ul {
        flex-direction: ${(props) => (props.toggleNav ? "column" : "")};
        width: 60vw;
        justify-content: center;

        li {
          display: flex;
          align-items: center;
          height: 50px;
          border-bottom: 1px solid var(--gray);
          margin-bottom: 10px;
          width: 75vw;

          button {
            border: 1px solid transparent;
            background-color: transparent;
            color: var(--darkBlue);
          }
        }

        a {
          text-decoration: none;
          color: var(--darkBlue);
          margin-top: 6px;
          font-size: 23px;
        }
      }
    }

    div {
    }
  }

  @media (min-width: 767px) {
    width: 250px;
    height: 100vh;

    .menu-list {
      width: 100%;
      display: flex;

      section {
        /* width: 100%; // alterado */
        display: flex;
        align-items: center;
        ul {
          flex-direction: column;
          width: 100%; // alterado
          justify-content: center;
          li {
            display: flex;
            align-items: center;
            height: 50px;
            border: none;
            width: auto;
            padding: 30px 0 30px 30px;
            font-family: var(--font-fira);
            border-radius: 30px 0 0 30px;
          }

          a {
            text-decoration: none;
            color: var(--darkBlue);
            margin-top: 6px;
            font-size: 18px;
            font-family: var(--font-fira);
          }

          button {
            color: var(--darkBlue);
            font-size: 18px;
            font-family: var(--font-fira);
          }
        }
      }

      div {
        width: 100%;

        div {
          width: 100%;
          padding: 0px;
        }
      }
    }

    .${Page} {
      background-color: var(--greyBackground);
      border-radius: 5px 0px 0px 5px;
      padding-left: 5px;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 1rem 0;
  }
`;

export const Header = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 130px;
    margin-right: 25px;
  }

  div {
    margin-left: 25px;
    border: 1px solid transparent;
    width: 45px;
    height: 45px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: ${(props) =>
      props.currentPage === "groups"
        ? `url(${groups})`
        : props.currentPage === "activities"
        ? `url(${activities})`
        : props.currentPage === "goals"
        ? `url(${goals})`
        : `url(${home})`};
  }

  @media (min-width: 767px) {
    width: 250px;
    div {
      display: none;
    }

    img {
      width: 130px;
      margin: auto;
    }
  }
`;

export const Footer = styled.div`
  section {
    display: ${(props) => (props.toggleNav ? "block" : "none")};
    width: 70%;
    align-items: center;
  }
  .username {
    font-family: var(--font-fira);
    font-size: 15px;
    color: var(--darkBlue);
  }
  .useremail {
    font-family: var(--font-fira);
    font-size: 12px;
    font-style: italic;
    font-weight: light;
    color: var(--gray);
  }

  @media (min-width: 767px) {
    section {
      margin-bottom: 10px;
    }
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LogoutButton = styled.a`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const NewAvatar = styled(Avatar)`
  width: 100%;
  height: 100%;

  div {
    display: flex;
  }
`;

export const ContainerAvatar = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 30px;
`;
