import styled from "styled-components";
import Avatar from "react-nice-avatar";

export const ContainerModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 600px;
  height: 500px;
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
  }
`;

export const Head = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--lightGray);
  position: relative;
  padding: 20px 5px;
  padding-top: 30px;
  margin: 10px 5px;
  margin-top: 15px;
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

export const ContConfig = styled.main`
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const ContForm = styled.form`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  height: 100%;
  padding: 5px 0px;

  @media (min-width: 768px) {
    display: flex;
    border-right: solid 1px var(--gray);
  }

  label {
    font-family: var(--font-inter);
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const ContInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0px;
  height: 90px;
  margin: 0;

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

  div {
    margin: 0;
  }
`;

export const ContInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 98%;
  height: 70%;
  padding: 15px 5px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ContRandom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 10px;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ButtonSub = styled.button`
  background-color: var(--blue);
  color: var(--whiteSmoke);
  width: 90%;
  max-width: 264px;
  height: 40px;
  border: none;
  border-radius: 7px;
  margin-top: 25px;

  &:hover {
    background-color: var(--lightBlue);
  }

  @media (min-width: 768px) {
    /* width: 88%; */
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

  @media (min-width: 768px) {
  }

  &:hover {
    background-color: var(--gray);
    border: 1px solid var(--gray);
  }
`;

export const NewAvatar = styled(Avatar)`
  width: 12rem;
  height: 12rem;
  margin-bottom: 25px;

  div {
    display: flex;
  }
`;

export const defaultOptions = {
  sex: [
    { value: "man", label: "Man" },
    { value: "woman", label: "Woman" },
  ],
  faceColor: [
    { value: "#F9C9B6", label: "White" },
    { value: "#AC6651", label: "Tanned" },
    { value: "#5e4942", label: "Black" },
  ],
  earSize: [
    { value: "small", label: "Small" },
    { value: "big", label: "Big" },
  ],
  eyeStyle: [
    { value: "circle", label: "Circle" },
    { value: "oval", label: "Oval" },
    { value: "smile", label: "Smile" },
  ],
  noseStyle: [
    { value: "short", label: "Short" },
    { value: "long", label: "Long" },
    { value: "round", label: "Round" },
  ],
  mouthStyle: [
    { value: "laugh", label: "Laugh" },
    { value: "smile", label: "Smile" },
    { value: "peace", label: "Peace" },
  ],
  shirtStyle: [
    { value: "hoody", label: "Hoody" },
    { value: "short", label: "Short" },
    { value: "polo", label: "Polo" },
  ],
  glassesStyle: [
    { value: "round", label: "Round" },
    { value: "square", label: "Square" },
    { value: "none", label: "None" },
  ],
  hairColor: [
    { value: "#000", label: "Black" },
    { value: "#fff", label: "White" },
    { value: "#77311D", label: "Redhead" },
    { value: "#FC909F", label: "Pink" },
    { value: "#D2EFF3", label: "Water" },
    { value: "#506AF4", label: "Blue" },
    { value: "#F48150", label: "Orange" },
  ],
  hairStyleMan: [
    { value: "normal", label: "Normal" },
    { value: "thick", label: "Thick" },
    { value: "mohawk", label: "Mohawk" },
  ],
  hairStyleWoman: [
    { value: "normal", label: "Normal" },
    { value: "womanLong", label: "WomanLong" },
    { value: "womanShort", label: "WomanShort" },
  ],
  hatStyle: [
    { value: "beanie", label: "Beanie" },
    { value: "turban", label: "Turban" },
    { value: "none", label: "None" },
  ],
  hatColor: [
    { value: "#000", label: "Black" },
    { value: "#fff", label: "White" },
    { value: "#77311D", label: "Redhead" },
    { value: "#FC909F", label: "Pink" },
    { value: "#D2EFF3", label: "Water" },
    { value: "#506AF4", label: "Blue" },
    { value: "#F48150", label: "Orange" },
  ],
  eyeBrowStyle: [
    { value: "up", label: "Up" },
    { value: "upWoman", label: "UpWoman" },
  ],
  shirtColor: [
    { value: "#9287FF", label: "Violet" },
    { value: "#6BD9E9", label: "Sky Blue" },
    { value: "#FC909F", label: "Pink" },
    { value: "#F4D150", label: "Maize" },
    { value: "#77311D", label: "Liver" },
  ],
  bgColor: [
    { value: "#9287FF", label: "Violet" },
    { value: "#6BD9E9", label: "Sky Blue" },
    { value: "#FC909F", label: "Pink" },
    { value: "#F4D150", label: "Maize" },
    { value: "#E0DDFF", label: "Lavender" },
    { value: "#D2EFF3", label: "Water" },
    { value: "#FFEDEF", label: "Salmon" },
    { value: "#FFEBA4", label: "M.Champagne" },
    { value: "#506AF4", label: "Blue" },
    { value: "#F48150", label: "Orange" },
    { value: "#74D153", label: "Green" },
    {
      value: "linear-gradient(45deg, #178bff 0%, #ff6868 100%)",
      label: "Gradient 1",
    },
    {
      value: "linear-gradient(45deg, #176fff 0%, #68ffef 100%)",
      label: "Gradient 2",
    },
    {
      value: "linear-gradient(45deg, #ff1717 0%, #ffd368 100%)",
      label: "Gradient 3",
    },
    {
      value: "linear-gradient(90deg, #36cd1c 0%, #68deff 100%)",
      label: "Gradient 4",
    },
    {
      value: "linear-gradient(45deg, #3e1ccd 0%, #ff6871 100%)",
      label: "Gradient 5",
    },
    {
      value: "linear-gradient(45deg, #1729ff 0%, #ff56f7 100%)",
      label: "Gradient 6",
    },
    {
      value: "linear-gradient(45deg, #56b5f0 0%, #45ccb5 100%)",
      label: "Gradient 7",
    },
  ],
};
