import styled from "styled-components";

export const App = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--whiteSmoke);
`;

export const Container = styled.section`
  width: 100vw;
  height: 86vh;
  background-color: var(--greyBackground);
  display: flex;
  flex-direction: column;
  margin-top: 114px;

  @media (min-width: 600px) {
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

  @media (min-width: 601px) {
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
  justify-content: flex-end;
  align-items: center;
  padding-right: 60px;
  padding-left: 50px;

  @media (max-width: 600px) {
    height: 12vh;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 600px) {
      display: none;
    }

    h2 {
      font-size: 52px;
      color: var(--darkBlue);
      text-align: start;
      margin: 5px 8px 0px 45px;
      @media (max-width: 730px) {
        margin: 5px 8px 0px 29px;
      }
      /* margin: 0px 8px 0px 19px; */
    }
    /**
    h2 {
     font-size: 24px;
      font-weight: 600;
      margin: 5px 8px 0px 45px;
      color: black;
      @media (max-width: 730px) {
        margin: 5px 8px 0px 29px;
      }
    } */
  }

  /**
  .header-bottom {
       width: 95%;
       margin-left: 23px;
   */
  .header-bottom {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    @media (max-width: 601px) {
      align-items: center;
      justify-content: center;
      margin-left: 0px;
    }

    button {
      padding: 15px;
      margin: 6px 0;
      background: transparent;
      color: var(--blue);
      font-weight: bold;
      font-size: 30px;
      border: none;
      border-radius: 15px;
      font-weight: 600;

      /* @media (max-width: 600px) {
        font-size: calc(12px + 1.5vmin);
        margin: 6px 7px;
      } */
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
  width: 95%;
  height: 82vh;
  overflow-y: auto;
  border-radius: 10px;
  font-size: 14px;

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

    @media (max-width: 600px) {
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

      @media (max-width: 600px) {
      }
    }
  }
`;
