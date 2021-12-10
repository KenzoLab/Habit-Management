import styled from "styled-components";
import habit from "../../assets/habit-mobile.png";
import gif from "../../assets/AnimaGif.gif";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;


  .Image-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    content: url(${habit});
    width: 180px;
    margin: 30px 0px 20px 0px;
  }

  .Welcome-box {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    font-size: 40px;
    color: var(--darkBlue);
    font-family: var(--font-fira);
  }

  span {
    margin-top: 15px;
    font-size: 14px;
  }

  a {
    color: var(--blue);
    cursor: pointer;
    text-decoration: none;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: var(--red);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1024px) {

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 500px;
    }

    h1 {
      font-family: var(--font-fira)
      position: relative;
      margin: 0;
      margin-bottom: 50px;
    }

    .Image-box {
      width: 70vw;
      width: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      content: url(${gif});
      width: 500px;
      height: 500px;
    }

    .Welcome-box {
      width: 40vw;
      height: 640px;
      margin-left: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

export const Button = styled.button`
  width: 245px;
  border: 1px solid transparent;
  border-radius: 4px;
  height: 40px;
  background-color: var(--blue);
  color: var(--whiteSmoke);
  font-weight: bold;
  font-size: 14px;
  margin: 10px 0px;

  &:hover {
    cursor: pointer;
    background-color: var(--lightBlue);
  }

  @media (min-width: 1024px) {
    width: 256px;
    height: 40px;
    margin-top: 5px;
  }
`;
