import { Switch, Route } from "react-router-dom";
import Signin from "../pages/Signin";
import SignUp from "./../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Groups from "../pages/Groups";
import Activities from "../pages/Activities";
import Goals from "../pages/Goals";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Signin />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/groups">
        <Groups />
      </Route>
      <Route path="/activities">
        <Activities />
      </Route>
      <Route path="/goals">
        <Goals />
      </Route>
    </Switch>
  );
};

export default Routes;
