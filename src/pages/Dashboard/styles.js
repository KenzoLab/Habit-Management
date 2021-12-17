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
  align-items: center;
  background-color: var(--greyBackground);
  margin-top: 15vh;

  @media (min-width: 768px) {
    margin-top: 5vh;
    margin-left: 250px;
    align-items: flex-start;
  }
`;

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 768px) {
    width: 60vw;
    max-width: 1060px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .header-top {
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      color: var(--darkBlue);
      font-size: 52px;
      display: none;
    }
    @media (min-width: 768px) {
      margin-bottom: 30px;
      margin-left: 55px;
      justify-content: space-between;
      padding-left: ;
      max-width: 965px;
      width: 55vw;
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
    
    button {
        padding: 8px 15px;
      }
      
      @media (min-width: 768px) {
        margin-bottom: 15px;
        margin-left: 35px;
        button {
          padding: 8px 15px;
          font-size: 30px;
      }
    }
  }

  .filter-buttons {
    padding: 8px 0px;
    margin: 10px 4px;
    color: var(--blue);
    font-weight: bold;
    font-size: 20px;
    border: none;
    border-radius: 15px;
    font-weight: 600;
    box-sizing: border-box;
  }
`;

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
  width: 290px;
  border-style: none;
  padding-left: 10px;
  font-size: 16px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 15px;
  transition: all 0.5s ease-in-out;
  background-color: #f9deb3;
  padding-right: 40px;
  color: #9398a2;
  @media (min-width: 768px) {
    width: 50px;  
  }
  &:focus {
    width: 290px;
    border-radius: 15px;
    background-color: #f9deb3;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
    padding-left: 20px;
  }
  &::placeholder {
    color: #9398a2;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 100;
  }
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
    width: 290px;
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
  @media (min-width: 768px) {
    max-width: 1060px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Footer = styled.footer`
  align-self: flex-end;
`;
