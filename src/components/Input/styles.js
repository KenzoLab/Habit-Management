import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  margin-bottom: 15px;
  height: 95px;
  label {
    color: #081140;
    margin-bottom: 5px;
    font-family: "Fira Sans", sans-serif;
    font-size: 15px;
    width: 256px;
    text-align: left;
  }
  input {
    width: 256px;
    height: 45px;
    padding-left: 5px;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: #efefed;
    color: #9398a2;
    font-size: 14px;
    &:focus {
      outline: none;
    }
  }
  .error {
    margin: 7px;
    height: 12px;
  }
`;