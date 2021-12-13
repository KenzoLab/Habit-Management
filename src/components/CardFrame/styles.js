﻿import styled from "styled-components";

export const Container = styled.div`
  height: 234px;
  width: 90%;
  min-width: 300px;
  max-width: 600px;
  border-radius: 15px;
  background-color: #fff;
  position: relative;
  padding: 25px;
  box-sizing: border-box;

  ::after {
    content: "";
    height: 100%;
    width: 100%;
    border-radius: 15px;
    background-color: var(--yellow);
    position: absolute;
    top: 0;
    left: 10px;
    z-index: -1;
  }
  @media (min-width: 600px) {
    border-radius: 34px;
    ::after {
      content: "";
      border-radius: 34px;
    }
  }
`;