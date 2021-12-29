import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 15px;
  height: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content__title {
    font-size: 25px;
    font-weight: 600;
    color: var(--black);
  }
  .content__group,
  .content__date {
    font-size: 20px;
    font-weight: 600;
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
