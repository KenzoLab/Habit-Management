import styled from "styled-components";

export const App = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--whiteSmoke);

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const Container = styled.section`
  width: 100vw;
  height: 86vh;
  background-color: #dedede;
  display: flex;
  flex-direction: column;
  margin-top: 114px;

  @media (min-width: 600px) {
    margin-top: 0;
    height: 100vh;
    width: calc(100vw - 250px);
    margin-left: 250px;
    border-radius: 40px 0px 0px 40px;
  }
`;

export const Aside = styled.aside`
  width: 100vw;
  height: 18vh;
  /* display: flex;
  flex-direction: row;
  background-color: lightgray;
  justify-content: space-between; */

  @media (min-width: 600px) {
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

  @media (max-width: 600px) {
    height: 12vh;
  }

  .header-search {
    margin-right: 10%;
    input {
      padding: 7px 16px;
      font-size: 16px;
      border-radius: 9px;
      border: none;
      margin-right: 12px;
    }
    button {
      padding: 7px 16px;
      background-color: #72c1f1;
      border-radius: 9px;
      border: none;
    }
  }

  .header-top {
    width: 100%;
    height: 50%;
    margin-bottom: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 600px) {
      display: none;
    }
    h2 {
      font-size: 24px;
      margin: 0px 8px 0px 19px;
    }
  }
  .header-bottom {
    width: 95%;
    margin-left: 35px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    @media (max-width: 600px) {
      align-items: center;
      justify-content: center;
      margin-left: 0px;
    }

    button {
      padding: 7px 15px;
      margin: 6px 10px;
      background: transparent;
      color: #081140;
      font-weight: bold;
      font-size: 20px;
      border: none;
      border-radius: 7px;
      font-weight: 600;

      @media (max-width: 600px) {
        font-size: calc(12px + 1.5vmin);
        margin: 6px 7px;
      }
    }

    button:focus {
      background: #72c1f1;
      opacity: 70%;
    }
  }

  #blues {
    background-color: #dedede;
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
    background-color: #fabd59;
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
