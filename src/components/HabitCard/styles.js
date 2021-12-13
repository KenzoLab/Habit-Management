import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  // Card Content
  .content__text {
    border-radius: 34px;
    height: 100%;
    flex: 1;
    display: grid;
    grid-template-areas:
      "title title"
      "description description"
      "description description"
      "category difficult";
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
  .content__difficult {
    grid-area: difficult;
    font-size: 15px;
    font-weight: 600;
    align-self: center;
    text-align: end;
    color: var(--red);
  }

  .delete__button {
    height: 36px;
    width: 36px;
    color: var(--whiteSmoke);
    font-size: 20px;
    font-weight: bold;
    border-radius: 50%;
    background-color: var(--yellow);

    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 600px) {
    .content__text {
      grid-template-areas:
        "title category difficult"
        "description description description"
        "description description description"
        "description description description";
    }
    .content__title {
      align-self: center;
    }
    .content__category {
      justify-self: center;
      align-self: center;
    }
    .content__difficult {
      align-self: center;
    }
  }
`;
