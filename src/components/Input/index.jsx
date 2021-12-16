import { Container, StyledSelect } from "./styles";
import { Controller } from "react-hook-form";

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

export const InputSelect = ({
  label,
  name,
  control,
  options,
  errors,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <StyledSelect
              {...field}
              classNamePrefix="Select"
              options={options}
              placeholder={"Select an option"}
              {...rest}
            />
          );
        }}
      />
      <p className="error">{errors}</p>
    </Container>
  );
};
