import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Redirect, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  Container,
  Section,
  Header,
  Form,
  DivChild,
  Input,
  Label,
  Paragr,
} from "./styles";
import logo from "../../assets/logoSemSlogan-removebg-preview.png";
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
      <Header>
        <img src={logo} alt="" />
      </Header>
      <Section>
        <h1>Signup</h1>
        <Form onSubmit={handleSubmit(handleRegisterSubmit)}>
          {/*<DivChild>
            <div className="abs">
              <Input
                id="username"
                type="text"
                pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
                autoComplete="username"
                placeholder=" "
                required=""
                {...register("username")}
              ></Input>
              <Label>Name:</Label>
            </div>
            <Paragr>{errors.username?.message}</Paragr>
          </DivChild>*/}

          <h2>Name:</h2>
          <input
            className="input"
            placeholder="Name"
            {...register("username")}
          />
          <p className="error-message">{errors.username?.message}</p>

          {/*<DivChild>
            <div className="abs">
              <Input
                id="Email"
                type="text"
                autoComplete="email"
                placeholder=" "
                required=""
                {...register("email")}
              ></Input>
              <Label>Email:</Label>
            </div>
            <Paragr>{errors.email?.message}</Paragr>
          </DivChild>*/}

          <h2>Email:</h2>
          <input className="input" placeholder="Email" {...register("email")} />
          <p className="error-message">{errors.email?.message}</p>

          <h2>Password:</h2>
          <input
            className="input"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <p className="error-message">{errors.password?.message}</p>

          {/*<DivChild>
            <div className="abs">
              <Input
                id="password"
                type="text"
                autoComplete="password"
                placeholder=" "
                required=""
                type="password"
                {...register("password")}
              ></Input>
              <Label>Password:</Label>
            </div>
            <Paragr>{errors.password?.message}</Paragr>
          </DivChild>*/}

          <h2>Confirm password:</h2>
          <input
            className="input"
            type="password"
            placeholder="Confirm password"
            {...register("confirm_password")}
          />
          <p className="error-message">{errors.confirm_password?.message}</p>

          {/*<DivChild>
            <div className="abs">
              <Input
                id="confirm_password"
                type="text"
                autoComplete="confirm_password"
                placeholder=" "
                required=""
                type="password"
                {...register("confirm_password")}
              ></Input>
              <Label>Confirm password:</Label>
            </div>
            <Paragr>{errors.confirm_password?.message}</Paragr>
          </DivChild>*/}

          <button type="submit">Sign Up</button>
        </Form>

        <p className="message">
          If you have already registered, login{" "}
          <Link to="/" id="link">
            here
          </Link>
          !
        </p>
      </Section>
    </Container>
  );
};

export default SignUp;
