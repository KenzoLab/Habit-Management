import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import MediaQuery from "react-responsive";
import { toast } from "react-toastify";

import habit from "../../assets/habit-mobile.png";
import gif from "../../assets/AnimaGif.gif";
import Input from "../../components/Input";
import { Container, Button } from "./styles";
import { useAuth } from "../../providers/AuthProvider";

const Signin = () => {
  const { signInFunction } = useAuth();

  const formSchema = yup.object().shape({
    username: yup.string().required("Enter your username*"),
    password: yup.string().required("Enter your password*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const toastError = (message) => toast.error(message);

  const onSubmitFunction = (data) => {
    signInFunction(data, toastError);
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
            type="password"
            placeholder="Enter your password"
          />

          <Button type="submit">Sign In</Button>
        </form>

        <hr className="line" />

        <span>
          If you don't have an account, sign up<Link to="/signup"> here</Link>!
        </span>
      </div>
    </Container>
  );
};

export default Signin;
