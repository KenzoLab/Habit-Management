import { Switch } from "react-router-dom";

import Route from "./routes";
import Signin from "../pages/Signin";
import Signup from "./../pages/Signup";
import Dashboard from "../pages/Dashboard";
// import Groups from "../pages/Groups";
// import Activities from "../pages/Activities";
// import Goals from "../pages/Goals";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      {/* <Route path="/groups" component={Groups} isPrivate />
      <Route path="/activities" component={Activities} isPrivate />
      <Route path="/goals" component={Goals} isPrivate /> */}
    </Switch>
  );
};

export default Routes;
