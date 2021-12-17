import styled from "styled-components";

export const ContainerDash = styled.div`
  background-color: var (--whiteSmoke);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 400px;
  margin-top: 60px;
`;

export const ContSearch = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  div {
    width: fit-content;
    height: fit-content;
    position: relative;
  }
`;

export const InputSearch = styled.input`
  height: 50px;
  width: 290px;
  border-style: none;
  padding-left: 10px;
  font-size: 16px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 15px;
  transition: all 0.5s ease-in-out;
  background-color: #f9deb3;
  padding-right: 40px;
  color: #9398a2;

  @media (min-width: 768px) {
    width: 50px;
  }

  &:focus {
    width: 290px;
    border-radius: 15px;
    background-color: #f9deb3;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
    padding-left: 20px;
  }

  &::placeholder {
    color: #9398a2;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 100;
  }
`;

export const BtnSearch = styled.button`
    width: 50px;
    height: 50px;
    border-style: none;
    font-size: 18px;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    color: #9398A2;
    background-color:#f9deb3;
    pointer-events: painted;

    &:focus ~ input{
    width: 290px;
    border-radius: 15px;
    background-color: #f9deb3;
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
`;
