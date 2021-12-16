import styled from "styled-components";
import home from "../../assets/home.png";
import groups from "../../assets/groups.png";
import activities from "../../assets/edit.png";
import goals from "../../assets/goals.png";

const Page = props => props.currentPage;

export const Nav = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 1rem 0;
  align-items: center;
  flex-direction: column;
  justify-content: counter-increment;
  background-color: #fbfbf8;
  z-index: 9999;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: ${props => (props.toggleNav ? "100vh" : "15vh")};

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
    display: ${props => (props.toggleNav ? "block" : "block")};
  }

  .menu-list {
    display: ${props => (props.toggleNav ? "flex" : "none")};
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 25px 14px 25px;
    width: 80vw;
    height: 86.6vh;

    @media (max-width: 767px) {
      padding: 25px 5px 25px 5px;
    }

    section {
      width: 80vw;
      display: ${props => (props.toggleNav ? "flex" : "none")};
      ul {
        flex-direction: ${props => (props.toggleNav ? "column" : "")};
        width: 60vw;
        justify-content: center;

        li {
          display: flex;
          align-items: center;
          height: 50px;
          border-bottom: 1px solid #0000002b;
          margin-bottom: 10px;
          width: 75vw;

          button {
            border: 1px solid transparent;
            background-color: transparent;
            color: #081140;
          }
        }

        a {
          text-decoration: none;
          color: #081140;
          margin-top: 6px;
          font-size: 23px;
        }
      }
    }

    div {
      width: 80vw;
    }
  }

  /* @media (max-width: 767px) {
    .menu-list {
      padding: 25px 5px 25px 5px;
    }
  }*/

  @media (min-width: 767px) {
    width: 200px;
    height: 100vh;
    padding: 25px 5px 25px 25px;
    .menu-list {
      width: 250px;
      display: flex;

      section {
        width: 250px;
        display: flex;
        align-items: center;
        ul {
          flex-direction: column;
          width: 200px;
          justify-content: center;

          li {
            display: flex;
            align-items: center;
            height: 50px;
            border: none;
            width: 176px;
            margin: 0px 0px 10px 15px;
          }

          a {
            text-decoration: none;
            color: #081140;
            margin-top: 6px;
            font-size: 18px;
            font-family: "Fira Sans";
          }
        }
      }

      div {
        width: 190px;
        padding-left: 14px;

        div {
          width: 100px;
          padding: 0px;
        }
      }
    }

    .${Page} {
      background-color: var(--whiteSmoke);
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
  padding-top: 20px;

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
    background-image: ${props =>
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
    display: ${props => (props.toggleNav ? "block" : "none")};
    width: 80vw;
    align-items: center;
  }
  .username {
    font-size: 15px;
    color: #081140;
  }
  .useremail {
    font-size: 12px;
    font-style: italic;
    color: #9398a2;
  }

  @media (min-width: 767px) {
    section {
      margin-bottom: 10px;
    }
  }
`;
