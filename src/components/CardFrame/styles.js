import styled from "styled-components";

export const Container = styled.div`
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
  @media (min-width: 768px) {
    width: ${(props) => (props.cardType === "group" ? "460px" : "290px")};
  }
`;
