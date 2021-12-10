import { TextField } from "@mui/material";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import habit from "../../assets/habit-mobile.png";
import gif from "../../assets/AnimaGif.gif";
import { Container, Button } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Signin = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Enter your email*").email("Email inválido"),
    password: yup
      .string()
      .required("Register a password*")
      .min(6, "Senha fraca"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = data => {
    console.log(data);
  };

  return (
    <Container>
      <div className="Image-box">
        <img src={gif} alt="logo" loop="false" />
      </div>
      <div className="Welcome-box">
        <h1>Welcome</h1>

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            className="Inputs"
            label="Email:"
            errors={errors.email?.message}
            {...register("email")}
            placeholder="Enter your email"
          />

          <Input
            className="Inputs"
            label="Password:"
            errors={errors.password?.message}
            {...register("password")}
            placeholder="Enter your password"
          />

          <Button>Sign In</Button>
        </form>

        <hr className="line" />

        <span>
          If you don't have an account, sign up<Link to="/"> here</Link>!
        </span>
      </div>
    </Container>
  );
};

export default Signin;
