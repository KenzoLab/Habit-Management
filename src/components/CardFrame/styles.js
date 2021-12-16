import styled from "styled-components";

export const Container = styled.div`
  height: 234px;
  width: 20%;
  min-width: ${props => (props.cardType === "group" ? "500px" : "800px")};
  border-radius: 30px;
  position: relative;
  padding: 25px;
  border-right: 12px solid var(--yellow);
  background-color: var(--white);
  padding-left: 20px;
  box-sizing: border-box;
  /* transform: translateX(15px); */
  margin: 10px;

  box-shadow: -4px -2px 11px 0px rgba(147, 152, 162, 1);

  /* ::after {
    content: "";
    height: 100%;
    width: 99%;
    border-radius: 15px;
    background-color: var(--white);
    position: absolute;
    top: 0;
    left: -2px;
    z-index: -1;
  } */
  @media (min-width: 600px) {
    border-radius: 20px;
    border-right: 12px solid var(--yellow);
  }
`;
