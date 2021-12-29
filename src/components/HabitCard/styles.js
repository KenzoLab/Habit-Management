import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  border-radius: 28px;
  flex-direction: column;
  width: 190px;
  justify-content: space-between;

  .content__frequency {
    color: var(--blue);
  }
  .content__title {
    font-size: 23px;
    font-weight: 600;
    color: var(--darkBlue);
  }

  .content__category {
    font-size: 15px;
    font-weight: 600;
    color: var(--grey);
  }
`;

export const ButtonContainer = styled.div`
  button {
    background-color: var(--lightGray);
    border: solid 1px var(--gray);
    color: var(--darkBlue);
    height: 26px;
    width: 26px;
    font-size: 20px;
    font-family: var(--fira-font);
    text-align: center;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: var(--gray);
      border: 1px solid var(--gray);
    }
  }
`;

export const Difficulty = styled.span`
  grid-area: difficulty;
  font-size: 15px;
  font-weight: 600;
  align-self: center;
  text-align: end;

  color: ${(props) =>
    props.children === "Easy"
      ? "var(--green)"
      : props.children === "Hard"
      ? "var(--red)"
      : "var(--yellow)"};
`;
