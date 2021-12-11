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
    color: var(--darkBlue);
    margin-bottom: 5px;
    font-family: var(--font-fira);
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
    background-color: var(--lightGray);
    color: var(--gray);
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
