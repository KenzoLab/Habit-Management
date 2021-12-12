import { Switch } from "react-router-dom";

import Route from "./routes";
import Signin from "../pages/Signin";
import Signup from "./../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Groups from "../pages/Groups";
import Activities from "../pages/Activities";
import Goals from "../pages/Goals";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/signup" component={Signup} />
      <Route path="/groups" component={Groups} />
      <Route path="/activities" component={Activities} />
      <Route path="/goals" component={Goals} />
    </Switch>
  );
};

export default Routes;
