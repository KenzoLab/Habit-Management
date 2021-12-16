import styled from "styled-components";

export const Container = styled.div`
  height: 234px;
  width: 90%;
  min-width: 300px;
  max-width: ${(props) => {
    if (props.cardType === "activities" || props.cardType === "goals") {
      return "350px";
    } else {
      return "650px";
    }
  }};
  border-radius: 15px;
  position: relative;
  padding: 25px;
  background-color: var(--white);
  padding-left: 20px;
  box-sizing: border-box;
  border-right: 7px solid var(--yellow);

  @media (min-width: 600px) {
    border-radius: 34px;
    border-right: 12px solid var(--yellow);
  }
`;
