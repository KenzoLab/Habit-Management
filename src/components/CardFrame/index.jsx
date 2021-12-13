import { Container } from "./styles";

const CardFrame = ({ children }) => {
  return (
    <Container>
      {children}
      <div className="back"></div>
    </Container>
  );
};

export default CardFrame;
