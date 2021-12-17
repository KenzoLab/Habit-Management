import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 99%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 28px;

  /*
  width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    */

  // Card Content
  .content__text {
    border-radius: 34px;
    height: 100%;

    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
  }
  .content__title {
    grid-area: title;
    font-size: 28px;
    align-self: center;
    font-weight: 600;
    color: var(--black);
  }
  .content__description {
    font-size: 15px;
    grid-area: description;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    max-height: 80px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  .content__category {
    grid-area: category;
    font-size: 15px;
    font-weight: 600;
    align-self: center;
    color: var(--grey);
  }

  .delete__button {
    height: 36px;
    width: 36px;
    color: var(--whiteSmoke);
    font-size: 20px;
    font-weight: bold;
    border-radius: 50%;
    background-color: var(--yellow);

    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  @media (min-width: 600px) {
    .content__text {
      grid-template-areas:
        "title category difficulty"
        "description description description"
        "description description description"
        "description description description";
    }
    .content__title {
      align-self: center;
      margin-bottom: 20px;
    }
    .content__category {
      justify-self: center;
      align-self: center;
      margin-bottom: 20px;
    }
    .content__description {
      max-height: 109px;
      -webkit-line-clamp: 6;
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

export const LineVertical = styled.hr`
  height: 96%;
  margin: 0px 15px 0px 60px;
`;
