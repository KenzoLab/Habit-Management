import styled from "styled-components";

export const ContainerModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 600px;
  height: 410px;
  border-radius: 25px;
  border: solid 3px var(--yellow);
  box-shadow: 0px 0px 12px 3px rgba(30, 30, 30, 0.61);
  padding: 5px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
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
  padding: 20px 5px;
  padding-top: 30px;
  margin: 10px 5px;
  margin-bottom: 20px;
  width: 100%;
  height: 100px;

  @media (min-width: 768px) {
    padding: 20px 5px;
    padding-top: 30px;
    margin: 10px 5px;
    margin-bottom: 20px;
  }

  h3 {
    font-family: var(--font-inter);
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--darkBlue);

    @media (min-width: 768px) {
      font-size: 30px;
    }
  }
`;

export const ContForm = styled.form`
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: 320px;
    margin-top: 40px;
  }
`;

export const ContInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 85%;
  margin-bottom: 0px;
  height: 90px;
  margin: 0;

  .error {
    color: var(--red);
    font-size: 10px;
    height: 12px;
    margin-top: 5px;
  }

  input {
    width: 100%;
    height: 40px;
    padding-left: 15px;
    border: solid 1px var(--gray);
    font-style: italic;
    font-family: var(--font-fira);
  }

  label {
    font-family: var(--font-inter);
    width: 100%;
  }

  div {
    margin: 0;
    width: 100%;
  }
`;

export const ButtonSub = styled.button`
  background-color: var(--blue);
  color: var(--whiteSmoke);
  width: 86%;
  height: 40px;
  border: none;
  border-radius: 7px;
  margin-top: 25px;

  &:hover {
    background-color: var(--lightBlue);
  }

  @media (min-width: 768px) {
    margin-top: 50px;
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
  margin-top: 5px;
  margin-right: 5px;
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    background-color: var(--gray);
    border: 1px solid var(--gray);
  }
`;
