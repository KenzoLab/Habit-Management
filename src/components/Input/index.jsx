import { Container } from "./styles";
function Input({ label, errors, register, data, ...rest }) {
  return (
    <Container>
      <label>{label}</label>
      <input {...register(`${data}`)} {...rest}></input>
      <p className="error">{errors}</p>
    </Container>
  );
}

export default Input;
