import { Container } from "./styles";
function Input({ label, errors, ...rest }) {
  return (
    <Container>
      <label>{label}</label>
      <input {...rest}></input>
      <p>{errors}</p>
    </Container>
  );
}

export default Input;
