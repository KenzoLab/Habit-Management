import styled from "styled-components";

export const CardFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 290px;
  height: 235px;
  border-radius: 30px;
  padding: 25px;
  border-right: 12px solid var(--yellow);
  background-color: var(--white);
  box-sizing: border-box;
  margin: 10px;
  box-shadow: 4px 2px 11px 0px rgba(147, 152, 162, 0.6);
  border-radius: 20px;
`;

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



  @media (min-width: 600px) {
    .content__text {
      grid-template-areas:
        "title category difficulty"
        "description description description"
        "description description description"
        "description description description";
    }
    .content__category {
      margin-bottom: 20px;
    }
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
`

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

export const LineVertical = styled.hr`
  height: 96%;
  margin: 0px 15px 0px 60px;
`;
