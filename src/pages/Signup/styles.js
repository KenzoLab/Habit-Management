import styled from "styled-components";
import "../../fonts/FiraSans/FiraSans-Medium.ttf";
import "../../fonts/FiraSans/FiraSans-Regular.ttf";
import "../../fonts/FiraSans/FiraSans-SemiBold.ttf";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    height: 100vh;
    justify-content: space-evenly;
  }
`;

export const Header = styled.header`
  img {
    width: 150px;
    margin: 20px 0 0 0;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 24px;
    @media (min-width: 768px) {
      font-size: 52px;
    }
  }
  h2 {
    font-size: 12px;
  }

  button {
    width: 239px;
    height: 30px;
    background-color: #38b6ff;
    color: #ffffff;

    font-size: 12px;
    font-weight: 600;

    border: none;
    border-radius: 5px;

    margin: 15px 0px 20px 0px;
  }

  .message {
    font-size: 12px;
    border-top: 1px solid #9398a2;
    padding: 15px;
  }

  #link {
    color: #38b6ff;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .input {
    width: 239px;
    height: 30px;
    margin-bottom: 15px;

    border: none;
    background-color: rgba(222, 222, 222, 0.4);
    border-radius: 5px;

    padding-left: 10px;

    font-size: 12px;
  }
`;

//Seção - Input do Bruno: alterado pelo Breno
export const Label = styled.label`
  color: #081140;
  opacity: 50%;
  pointer-events: none;
  position: absolute;
  top: calc(50% - 5px);
  font-size: 14px;
  transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  background-color: transparent;
  box-sizing: border-box;
  align-self: flex-start;
`;

export const Input = styled.input`
  font-size: 14px;
  width: 239px;
  height: 30px;
  padding-left: 10px;
  margin-top: 30px;
  text-align: flex-start;
  box-sizing: border-box;
  border: none;
  border-bottom: solid 1px #ffffff;
  opacity: 50%;
  background-color: #dedede;
  color: #081140;
  outline: none;
  transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -webkit-appearance: none;

  &:focus {
    border-bottom: 2px solid #ffffff;
    opacity: 100%;
  }

  &:hover {
    border-bottom: 2px solid #ffffff;
    opacity: 100%;
  }

  &::placeholder {
    color: transparent;
  }

  &:required:invalid + label {
    color: red;
    opacity: 100%;
  }

  &:focus:required:invalid {
    border-bottom: solid 2px red;
    opacity: 100%;
  }

  &:required:invalid + label:before {
    content: "*";
    opacity: 100%;
  }

  &:focus + label {
    font-size: 13px;
    margin-top: 2px;
    top: 0;
    color: #081140;
  }

  &:not(:placeholder-shown) + label {
    opacity: 100%;
    font-size: 13px;
    top: 0;
    color: #081140;
  }
`;

export const Paragr = styled.p`
  font-size: 11px;
  color: red;
  height: 20px;
  margin-top: 5px;
  align-self: flex-start;
`;

export const DivChild = styled(Container)`
  width: 100%;
  height: 80px;
  margin: 5px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: flex-start;
  position: relative;

  .abs {
    display: flex;
    flex-direction: column;
  }
`;

/**
 * export const DivFather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 700px;
  background-color: transparent;
  margin-top: 100px;

  @media (min-width: 768px) {
    width: 500px;
  }
`;
 * 

export const TittleH2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  padding-top: 5px;
  margin: 10px 0px;
`;
 * 
 export const Form = styled.form`
   background-color: transparent;
   padding: 20px 35px;
   width: 100%;
   height: 90%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   box-sizing: border-box;
 `;

export const Button = styled.button`
  width: 150px;
  padding: 12px 30px;
  margin-top: 50px;
  font-weight: 500;
  border-radius: 20px;
  border: solid 1px #0c5e5a;
  color: #127c77;
  background-color: transparent;
  align-self: center;

  @media (min-width: 1024px) {
    align-self: flex-end;

    &:hover {
      cursor: pointer;
      background-color: #0f8191;
      border: solid 1px #0f8191;
      color: white;
      font-weight: 600;
      opacity: 90%;
    }
  }
`;


 */
