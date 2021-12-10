import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { Container, Button } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Signin = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required("Enter your username*"),
    password: yup
      .string()
      .required("Register a password*")
      .min(6, "Senha fraca"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = data => {
    console.log(data);
    reset();
  };

  return (
    <Container>
      <div className="Image-box">
        <img></img>
      </div>

      <div className="Welcome-box">
        <h1>Welcome</h1>

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label="Username:"
            errors={errors.username ? errors.username.message : " "}
            register={register}
            data="username"
            placeholder="Enter your username"
          />

          <Input
            label="Password:"
            errors={errors.password?.message}
            register={register}
            data="password"
            placeholder="Enter your password"
          />

          <Button type="submit">Sign In</Button>
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
