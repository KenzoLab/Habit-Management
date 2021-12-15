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
      "category goals";
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

  .content__goals {
    grid-area: goals;
    justify-self: end;
    align-self: center;
  }

  .mobile__buttons {
    border-left: 1px solid;
    border-color: var(--grey);
    margin-left: 20px;
    height: 100%;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    > * {
      width: 30px;
      height: 30px;
      border: none;
      background-color: transparent;
      color: var(--blue);
      > * {
        width: 100%;
        height: 100%;
      }
    }
  }

  .desktop__buttons {
    display: none;
  }

  @media (min-width: 600px) {
    .content__text {
      grid-template-areas:
        "title category goals"
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

    .content__goals {
      margin-bottom: 20px;
    }

    .content__description {
      max-height: 109px;
      -webkit-line-clamp: 6;
    }
    .mobile__buttons {
      display: none;
    }
    .desktop__buttons {
      border-left: 1px solid;
      border-color: var(--grey);
      margin-left: 20px;
      height: 100%;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-end;
      > * {
        width: 100%;
        padding: 0.4rem;
        background-color: var(--white);
        border: none;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        > * {
          color: var(--blue);
        }
        > span {
          font-weight: 600;
          font-size: 19px;
        }
      }
    }
  }
`;

export const Difficult = styled.span`
  grid-area: difficult;
  font-size: 15px;
  font-weight: 600;
  align-self: center;
  text-align: end;

  color: ${(props) => {
    if (props.children.toLowerCase() === "easy") {
      return "var(--green)";
    } else if (props.children.toLowerCase() === "medium") {
      return "var(--yellow)";
    } else {
      return "var(--red)";
    }
  }};
  @media (min-width: 600px) {
    align-self: center;
    margin-bottom: 20px;
  }
`;
