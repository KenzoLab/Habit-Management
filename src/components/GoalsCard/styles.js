import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 15px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // Card Content
  > * {
    align-self: center;
    text-align: center;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .content__title {
    font-size: 34px;
    font-weight: 600;
    color: var(--black);
    flex-shrink: 1;
  }
  .content__group {
    font-size: 25px;
    font-style: italic;
    font-weight: 500;
  }
`;

export const Status = styled.p`
  font-weight: 600;
  font-size: 23px;
  align-self: center;
  text-align: center;
  color: ${(props) => {
    if (props.children === "Concluded") {
      return "var(--green)";
    } else if (props.children === "In Progress") {
      return "var(--yellow)";
    }
  }};
`;

export const Difficult = styled.span`
  font-size: 23px;
  font-weight: 600;

  color: ${(props) => {
    if (props.children.toLowerCase() === "easy") {
      return "var(--green)";
    } else if (props.children.toLowerCase() === "medium") {
      return "var(--yellow)";
    } else {
      return "var(--red)";
    }
  }};
`;
