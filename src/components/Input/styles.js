import styled from "styled-components";
import Select from "react-select";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  margin-bottom: 25px;
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
    padding-left: 15px;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: var(--lightGray);
    color: var(--gray);
    font-size: 14px;

    &::placeholder {
      color: var(--gray);
    }

    &:focus {
      outline: none;
    }
  }
  .error {
    margin: 7px;
    height: 12px;
  }
`;

export const StyledSelect = styled(Select)`
  .Select__control {
    height: 40px;
    width: 256px;
    padding: 0 5px;
    border-radius: 5px;
    border: solid 1px var(--gray);
    background-color: var(--lightGray);
    color: var(--gray);
    font-size: 14px;
    font-style: italic;
    font-family: var(--font-fira);
    cursor: pointer;
  }

  .Select__control:hover {
    border: solid 1px var(--gray);
    color: var(--gray);
  }

  .Select__control--is-focused {
    box-shadow: none;
    outline: none;
    color: var(--gray);
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    color: var(--gray);
    font-weight: 500;
    font-size: 14px;
    font-style: italic;
    font-family: var(--font-fira);
  }

  .Select__value-container {
    color: var(--gray);
    padding: 0 8px;
    height: 40px;
  }

  .Select__input-container {
    padding: 0;
    margin: 0;
  }
`;
