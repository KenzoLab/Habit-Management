import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import habit from "../../assets/habit.png";
const Signin = () => {
  return (
    <>
      <img src={habit} alt="logo"></img>
      <h1>Welcome</h1>

      <TextField
        className="Inputs"
        id="outlined-basic"
        label="Email"
        variant="outlined"
        sx={{
          margin: 200,
        }}
      />

      <TextField
        className="Inputs"
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />

      <Button className="Button" variant="contained">
        Sign In
      </Button>

      <hr className="line" />

      <span>
        If you odn't have an account, sign up <Link to="/">here</Link>!
      </span>
    </>
  );
};

export default Signin;
