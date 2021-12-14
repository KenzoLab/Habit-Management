﻿import styled from "styled-components";

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
`;

export const Header = styled.div`
  width: 100vw;
  height: 13.4vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;

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
`;

export const Nav = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 1rem;
  align-items: center;
  flex-direction: column;
  justify-content: counter-increment;
  background-color: #fbfbf8;
  height: ${props => (props.toggleNav ? "100vh" : "")};
  ul {
    display: flex;
    list-style: none;
    gap: 0.5rem;

    Link {
      display: block;
      padding: 0.5rem;
    }
  }

  button {
    display: ${props => (props.toggleNav ? "block" : "block")};
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px;
    width: 80vw;
    height: 86.6vh;

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
        }

        a {
          text-decoration: none;
          color: #081140;
          margin-top: 6px;
        }
      }
    }

    div {
      width: 80vw;
    }
  }

  @media (min-width: 601px) {
  }
`;
