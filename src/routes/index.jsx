import { Switch, Route } from 'react-router-dom';
import Signin from '../pages/Signin';
import SignUp from './../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Groups from '../pages/Groups';
import Activities from '../pages/Activities';
import Goals from '../pages/Goals';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route path="/signup" component={Signin} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/groups" component={Groups} />
      <Route path="/activities" component={Activities} />
      <Route path="/goals" component={Goals} />
    </Switch>
  );
};

export default Routes;
