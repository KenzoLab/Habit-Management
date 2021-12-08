import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import habit from "../../assets/habit-mobile.png";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Signin = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Enter your email*").email("Email inválido"),
    password: yup.string().required("Register a password*").min(6, "Senha fraca"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <img src={habit} alt="logo" />

      <h1>Welcome</h1>

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <TextField
          {...register("email")}
          className="Inputs"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{
            margin: 1,
          }}
        />
        <p>{errors.email?.message}</p>

        <TextField
          {...register("password")}
          type="password"
          className="Inputs"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{
            margin: 1,
          }}
        />

        <p>{errors.password?.message}</p>
        <Button
          type="Submit"
          className="Button"
          variant="contained"
          sx={{
            margin: 2,
            bgcolor: "#38B6FF",
            width: 230,
            "&:hover": {
              backgroundColor: "#72c1f1",
            },
          }}
        >
          Sign In
        </Button>
      </form>

      <hr className="line" />

      <span>
        If you don't have an account, sign up<Link to="/"> here</Link>!
      </span>
    </Container>
  );
};

export default Signin;
