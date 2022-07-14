import { Container } from "./styles";

const CardFrame = ({ children, cardType }) => {
  return <Container cardType={cardType}>{children}</Container>;
};

export default CardFrame;
