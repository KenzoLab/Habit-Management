import { Redirect, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import MediaQuery from "react-responsive";
import { toast } from "react-toastify";

import habit from "../../assets/habit-mobile.png";
import gif from "../../assets/AnimaGif.gif";
import Input from "../../components/Input";
import { Container, Button } from "./styles";
import { useSignUp } from "../../providers/SignUp";

const SignUp = () => {
  const { postSignUp } = useSignUp();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "A senha deve conter pelo menos 6 caracteres"),
    confirm_password: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegisterSubmit = ({ username, email, password }) => {
    postSignUp({ username, email, password });
    <Redirect to="/" />;
  };

  return (
    <Container>
      <MediaQuery maxWidth={1023}>
        <div className="Image-box">
          <img src={habit} alt="logo"></img>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={1024}>
        <div>
          <img src={gif} alt="logo"></img>
        </div>
      </MediaQuery>

      <div className="Welcome-box animation">
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit(handleRegisterSubmit)}>
          <Input
            label="Username:"
            errors={errors.username ? errors.username.message : " "}
            register={register}
            autoComplete="user"
            data="username"
            type="text"
            placeholder="Enter your username"
          />

          <Input
            label="Email:"
            errors={errors.email ? errors.email.message : " "}
            register={register}
            data="email"
            type="text"
            placeholder="Enter your email"
          />

          <Input
            label="Password:"
            errors={errors.password ? errors.password.message : " "}
            register={register}
            autoComplete="password"
            data="password"
            type="password"
            placeholder="Enter your password"
          />

          <Input
            label="Confirm password:"
            errors={
              errors.confirm_password ? errors.confirm_password.message : " "
            }
            register={register}
            autoComplete="confirm-password"
            data="confirm_password"
            type="password"
            placeholder="Confirm your password"
          />

          <Button type="submit">Sign Up</Button>
        </form>

        <hr className="line" />

        <span>
          If you have already registered, login{" "}
          <Link to="/" id="link">
            here
          </Link>
          !
        </span>
      </div>
    </Container>
  );
};

export default SignUp;
