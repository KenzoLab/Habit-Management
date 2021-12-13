import styled from "styled-components";

export const Container = styled.div`
  height: 234px;
  width: 600px;
  border-radius: 34px;
  background-color: #fff;
  position: relative;

  .back {
    width: 100%;
    height: 100%;
    background-color: var(--yellow);
    border-radius: 34px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 15px;
  }
`;
