import styled from "styled-components";

export const App = styled.section`
  display: flex;
  overflow-y: hidden;
  flex-direction: column;
  background-color: var(--greyBackground);
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--greyBackground);
  margin-top: 15vh;

  @media (min-width: 768px) {
    margin-top: 5vh;
  }

  /*
  width: 100vw;
  height: 82vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-top: 0;
    height: 100vh;
    width: calc(100vw - 200px);
    margin-left: 200px;
    border-radius: 40px 0px 0px 40px;
  }
  @media (min-width: 901px) {
    width: calc(100vw - 250px);
    margin-left: 250px;
  }*/
`;

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.header`
  .header-top {
    display: flex;
    justify-content: center;
    h2 {
      display: none;
    }
    @media (min-width: 768px) {
      h2 {
        display: block;
      }
    }
  }

  .header-search {
    display: flex;
    justify-content: flex-end;
  }

  .header-bottom {
    display: flex;
    justify-content: center;
  }

  .filter-buttons {
    padding: 8px 0px;
    margin: 6px 22px;
    color: var(--blue);
    font-weight: bold;
    font-size: 20px;
    border: none;
    border-radius: 15px;
    font-weight: 600;
    box-sizing: border-box;
  }
`;

/*
  height: 22vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-right: 60px;
  padding-left: 50px;

  @media (max-width: 768px) {
    padding: 0px;
  }

  input {
    padding: 7px 0px 7px 12px;
    font-size: 16px;
    border-radius: 15px;
    border: none;
    height: 50px;
    background-color: var(--extraLightYellow);
    @media (max-width: 900px) {
      width: 154px;
    }
  }

  button {
    padding: 7px 16px;
    font-size: 24px;
    font-weight: 600;
    width: 173px;
    height: 50px;
    color: var(--whiteSmoke);
    border-radius: 15px;
    border: none;
  }

  .header-search {
    display: flex;
    align-items: center;
    @media (max-width: 730px) {
      margin-right: 9px;
      input {
        padding: 6px 0px 7px 9px;
      }
    }
  }

  .search {
    width: 35px;
    height: 35px;
    padding: 0px;
    background-color: red;
    position: relative;
    right: 54px;
  }

  .header-top {
    width: 100%;
    height: 42%;
    margin-bottom: 4px;
    margin-top: 13px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 767px) {
      display: none;
    }

    h2 {
      font-size: 44px;
      font-weight: 600;
      margin: 5px 8px 0px 45px;
      color: black;
      @media (max-width: 730px) {
        margin: 5px 8px 0px 29px;
      }
    }
  }

  .header-bottom {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
      margin-left: 0px;
    }

    button {
      margin: 6px 0;
      color: var(--blue);
      font-weight: bold;
      font-size: calc(12px + 1.3vmax);
      border: none;
      border-radius: 15px;
      font-weight: 600;
      box-sizing: border-box;

      @media (max-width: 1024px) {
        width: 140px;
      }

      @media (min-width: 1024px) {
        font-size: 26px;
      }

      @media (max-width: 768px) {
        font-size: calc(12px + 1.5vmin);
      }

      @media (max-width: 440px) {
        padding: 15px 5px;
        width: 90px;
      }
    }
  }
  */

export const ContSearch = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  div {
    width: fit-content;
    height: fit-content;
    position: relative;
  }
`;
export const InputSearch = styled.input`
    height: 50px;
    width: 50px;
    border-style: none;
    padding: 10px;
    font-size: 16px;
    letter-spacing: 2px;
    outline: none;
    border-radius: 15px;
    transition: all .5s ease-in-out;
    background-color: #F9DEB3;
    padding-right: 40px;
    color: #9398A2;
    &::placeholder{
    color:#9398A2;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 100;
    &:focus{
    width: 300px;
    border-radius: 15px;
    background-color: #F9DEB3;
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
`;

export const BtnSearch = styled.button`
    width: 50px;
    height: 50px;
    border-style: none;
    font-size: 18px;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    color: #9398A2;
    background-color:#f9deb3;
    pointer-events: painted;
    &:focus ~ input{
    width: 300px;
    border-radius: 15px;
    background-color: #F9DEB3;
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
`;

export const ButtonToday = styled.button`
  background-color: ${(props) =>
    props.filter === "Daily" ? "var(--extraLightBlue)" : "none"};
`;

export const ButtonWeek = styled.button`
  background-color: ${(props) =>
    props.filter === "Weekly" ? "var(--extraLightBlue)" : "none"};
`;

export const ButtonMonth = styled.button`
  background-color: ${(props) =>
    props.filter === "Monthly" ? "var(--extraLightBlue)" : "none"};
`;

export const Cards = styled.section`
  height: 65vh;
  overflow-y: auto;

  /*
  margin: 0 auto;
  width: 100%;
  height: 70vh;
  overflow-y: auto;
  max-width: 1900px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
  align-items: flex-start;
  /* margin-top: 50px; */

  /* h2 {
    font-size: 24px;
    margin: 5px 10px;
  }

  .card-border {
    padding-right: 10px;
    background-color: var(--yellow);
    border-radius: 10px;
    margin: 0px 20px;
  }

  .card-description-border {
  }

  .card {
    height: 160px;
    margin: 30px 0px;
    padding: 10px 0px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    background-color: var(--greyBackground);
    border-radius: 10px;

    @media (max-width: 768px) {
      margin: 20px 0px;
    }
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-conteudo {
    //border-right: 2px solid #9398a2;
    width: 90%;
    padding: 0px 8px;
  }

  .card-description {
    height: 80px;
    overflow-y: auto;
  }

  .card-buttons {
    margin: 0px 17px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    button {
      border: none;
      color: blue;

      @media (max-width: 768px) {
      }
    }
  } */
`;

export const Footer = styled.footer`
  align-self: flex-end;
  /*
  margin-top: 2%;
  margin-right: 10%;
  align-self: flex-end;
  margin-bottom: 20px;

 */
`;
