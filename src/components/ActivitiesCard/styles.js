import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 15px;
  height: 100%;

  // Card Content
  > * {
    align-self: center;
    text-align: center;
  }

  .content__title {
    font-size: 34px;
    font-weight: 600;
    color: var(--black);
    margin-bottom: 12px;
  }
  .content__group {
    font-size: 25px;
    font-style: italic;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .content__date {
    font-size: 23px;
    font-weight: 600;
    margin-bottom: 30px;
    color: var(--grey);
    span {
      font-weight: 400;
      font-size: 20px;
    }
  }

  @media (min-width: 600px) {
    border-radius: 34px;
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
