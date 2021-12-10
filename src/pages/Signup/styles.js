import styled from "styled-components";
import habit from "../../assets/habit-mobile.png";
import gif from "../../assets/AnimaGif.gif";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f4;
  img {
    background-image: url(${habit});
    width: 263px;
    height: 135px;
    margin: 30px 0px 20px 0px;
    border: none;
  }
  .Welcome-box {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h1 {
    font-size: 40px;
    color: #081140;
    font-family: "Fira Sans", sans-serif;
  }
  hr {
    color: #818ed0;
    width: 50%;
    height: 0px;
    border-radius: 4px;
    margin: 20px 0px;
    align-self: center;
  }
  span {
    margin-top: 15px;
    font-size: 14px;
  }
  a {
    color: #38b6ff;
    cursor: pointer;
    text-decoration: none;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #dc1f1f;
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
      height: 280px;
    }
    h1 {
      font-family: "Fira Sans", sans-serif;
      position: relative;
      bottom: 70px;
      margin: 0;
    }
    .Image-box {
      width: 70vw;
      width: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      background-image: url(${gif});
      width: 500px;
      height: 500px;
    }
    .Welcome-box {
      width: 40vw;
      height: 70vh;
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
  background-color: #38b6ff;
  color: aliceblue;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin: 10px 0px;
  &:hover {
    background-color: #72c1f1;
  }
  @media (min-width: 1024px) {
    width: 256px;
    height: 40px;
    margin-top: 5px;
  }
`;

export const Input = styled.div``;