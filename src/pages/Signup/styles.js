import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--whiteSmoke);

  .Image-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  }

  img {
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
    margin-bottom: 30px;
  }

  hr {
    color: var(--lightPurple);
    width: 200px;
    height: 0px;
    border-radius: 4px;
    margin: 20px 0px;
    align-self: center;
  }

  span {
    margin-top: 10px;
    margin-bottom: 20px;
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
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .animation {
      animation-name: slide;
      animation-duration: 0.7s;
      animation-fill-mode: forwards;
    }

    @keyframes slide {
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

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
      width: 500px;
      height: 500px;
    }

    .Welcome-box {
      width: 40vw;
      height: 640px;
      /* margin-left: 50px; */
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      opacity: 0;
      transform: translateX(-100px);
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
