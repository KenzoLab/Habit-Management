import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 1rem 0;
  align-items: center;
  flex-direction: column;
  justify-content: center; /* era counter-incremencentert */
  background-color: var(--whiteSmoke);
  z-index: 100;
  position: absolute;
  left: 0;
  top: 0;

  height: ${(props) => (props.toggleNav ? "100vh" : "12vh")};

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
    padding: 25px 25px 14px 25px;
    width: 80vw;
    height: 86.6vh;

    @media (max-width: 767px) {
      padding: 25px 5px 25px 5px;
    }

    section {
      width: 80vw;
      display: ${(props) => (props.toggleNav ? "flex" : "none")};
      ul {
        flex-direction: ${(props) => (props.toggleNav ? "column" : "")};
        width: 60vw;
        justify-content: center;

        li {
          display: flex;
          align-items: center;
          height: 50px;
          border-bottom: 1px solid #9398A2;
          margin-bottom: 10px;

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
      width: 80vw;
    }
  }

  @media (min-width: 767px) {
    width: 250px;
    height: 100vh;

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
            margin: 0px 0px 10px 15px;
            font-family: var(--font-fira)
          }

          a {
            text-decoration: none;
            color: var(--darkBlue);
            margin-top: 6px;
            font-size: 18px;
          }
        }
      }

      div {
        width: 250px;
      }
    }
  }

  @media (max-width: 900px) {
    width: 200px;
    /* padding: 25px 5px 25px 25px; */
  }
  @media (max-width: 767px) {
    width: 100%;
    /* padding: 1rem 0; */
  }
`;

export const Header = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-top: 20px; */

  img {
    width: 130px;
    margin-right: 25px;
  }

  button {
    margin-left: 25px;
    border: 1px solid transparent;
    background-color: transparent;
    width: 25px;
    height: 25px;
  }

  @media (min-width: 767px) {
    width: 250px;
    button {
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
    width: 80vw;
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
