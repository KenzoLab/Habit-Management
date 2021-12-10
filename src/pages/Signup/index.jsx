import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Redirect, Link } from "react-router-dom";
import Input from "../../components/Input";
import { Container, Button } from "./styles";
import { api } from "../../services/api.js";

const SignUp = () => {
  const history = useHistory();

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

  const handleRegisterSubmit = (data) => {
    delete data.confirm_password;
    console.log(data);
  };

  return (
    <Container>
      <div className="Image-box">
        <img></img>
      </div>

      <div className="Welcome-box">
        <h1>Signup</h1>

        <form onSubmit={handleSubmit(handleRegisterSubmit)}>

          <Input
            label="Username:"
            errors={errors.username ? errors.username.message : " "}
            register={register}
            data="username"
          />

          <Input
          label="Email:"
          errors={errors.email ? errors.email.message : " "}
          register={register}
          data="email"
          />

          <Input
            label="Password:"
            errors={errors.password ? errors.password.message : " "}
            register={register}
            data="password"
          />

          <Input
            label="Confirm password:"
            errors={errors.confirm_password ? errors.confirm_password.message : " "}
            register={register}
            data="confirm_password"
          />

          <Button type="submit">Sign Up</Button>
        </form>

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
