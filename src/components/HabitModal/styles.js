import styled from "styled-components";

export const ContainerModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 600px;
  height: 470px;
  border-radius: 25px;
  margin-top: 30px;
  border: solid 3px var(--yellow);
  box-shadow: 0px 0px 12px 3px rgba(30, 30, 30, 0.61);
  padding: 5px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;

    height: 500px;
  }
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--lightGray);
  position: relative;
  padding: 15px 5px;
  margin: 0px 5px;
  margin-bottom: 20px;
  width: 100%;
  height: 60px;

  @media (min-width: 768px) {
    width: 90%;
  }

  h3 {
    font-family: var(--font-inter);
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--darkBlue);
  }

  h6 {
    font-family: var(--font-inter);
    color: var(--darkBlue);
    font-size: 25px;
    font-style: medium;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
  }

  button {
    margin-top: 5px;
    margin-right: 5px;
    position: absolute;
    top: 0;
    right: 0;

    @media (min-width: 768px) {
      margin-right: -10px;
    }
  }
`;

export const ContForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ContInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin-bottom: 10px;
  height: 60px;

  .error {
    color: var(--red);
    font-size: 10px;
    height: 12px;
    margin-top: 2px;
  }

  input {
    height: 40px;
    padding-left: 15px;
    border: solid 1px var(--gray);
    font-style: italic;
    font-family: var(--font-fira);
  }

  label {
    font-family: var(--font-inter);
  }
`;

export const ButtonSub = styled.button`
  background-color: var(--blue);
  color: var(--whiteSmoke);
  width: 97%;
  max-width: 264px;
  height: 40px;
  border: none;
  border-radius: 7px;
  margin-bottom: 15px;

  &:hover {
    background-color: var(--lightBlue);
  }

  @media (min-width: 768px) {
    width: 88%;
  }
`;

export const ContHabits = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  height: 100%;
  padding: 0px 0px;

  @media (min-width: 768px) {
    display: flex;
    border-right: solid 1px var(--gray);
  }
`;

export const ContList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  border-radius: 5px;
  width: 90%;
  height: 380px;
  padding: 10px;
  margin: 10px;
  overflow-y: scroll;

  background-color: var(--lightGray);
`;

export const ContItem = styled.div`
  background-color: var(--white);
  width: 100%;
  height: 60px;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 2px 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContInfosItem = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  h4 {
    /* padding-left: 10px; */
    width: 100%;
    height: 35%;
    font-size: 16px;
    font-weight: 500;
    color: var(--darkBlue);
  }

  p {
    width: 60%;
    height: 65%;
    font-size: 8.2px;
    padding: 3px;
  }
`;

export const ContTitlesItem = styled.div`
  width: 30%;
  height: 65%;
  display: flex;
  flex-direction: column;

  h5 {
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }

  h6 {
    font-size: 12px;
    font-weight: 500;
    color: var(--red);
  }
`;

export const BtnCloseDelete = styled.button`
  background-color: var(--lightGray);
  border: solid 1px var(--gray);
  color: var(--darkBlue);
  height: 26px;
  width: 26px;
  font-size: 20px;
  text-align: center;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--gray);
    border: 1px solid var(--gray);
  }
`;
