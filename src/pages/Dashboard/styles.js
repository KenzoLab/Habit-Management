import styled from "styled-components";

export const App = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--whiteSmoke);
`;

export const Container = styled.section`
  width: 100vw;
  height: 82vh;
  background-color: var(--greyBackground);
  display: flex;
  flex-direction: column;
  margin-top: 17vh;

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
  }
`;

export const Aside = styled.aside`
  width: 100vw;
  height: 18vh;
  /* display: flex;
  flex-direction: row;
  background-color: lightgray;
  justify-content: space-between; */

  @media (min-width: 768px) {
    width: 250px;
    height: 100vh;
    /* max-width: 260px; */
    /* flex-direction: column;
    justify-content: space-between; */
  }
`;

export const Header = styled.header`
  height: 22vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-right: 60px;
  padding-left: 50px;

  @media (max-width: 768px) {
    padding: 0px;
    height: 10vh;
  }

  .header-search {
    /* margin-right: 10%; */
    display: flex;
    @media (max-width: 730px) {
      margin-right: 9px;
      input {
        padding: 6px 0px 7px 9px;
        margin-right: 10px;
      }
      button {
        padding: 7px 14px;
      }
    }
  }

  input {
    padding: 7px 0px 7px 12px;
    font-size: 16px;
    border-radius: 15px;
    border: none;
    margin-right: 25px;
    height: 50px;
    background-color: var(--extraLightYellow);
    /*margin-right: 12px;*/
    @media (max-width: 900px) {
      width: 154px;
    }
  }

  button {
    padding: 7px 16px;
    background-color: var(--blue);
    font-size: 24px;
    font-weight: 600;
    width: 173px;
    height: 50px;
    color: var(--whiteSmoke);
    border-radius: 15px;
    border: none;
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
      //padding: 15px;
      margin: 6px 0;
      background: transparent;
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

    button:focus {
      background: var(--extraLightBlue);
      /* opacity: 70%; */
    }
  }

  #blues {
    /* background-color: var(--greyBackground); */
  }
`;

export const Cards = styled.section`
  margin: auto;
  width: 100%;
  height: 82vh;
  /**
  margin: 0 auto;
  width: 95%;
  height: 65vh;
   */
  overflow-y: auto;
  padding: 0 50px;
  /* border-radius: 10px; */
  /* font-size: 14px; */
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;

  h2 {
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
    background-color: #f2f0f0;
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
  }
`;

export const Footer = styled.footer`
  margin-top: 2%;
  margin-right: 10%;
  align-self: flex-end;
  margin-bottom: 20px;

  #toglebutton {
    padding: 9px 18px;
    width: 40px;
    border-radius: 50%;
    border: none;
    background-color: gray;
    color: white;
  }
`;
