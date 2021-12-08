import { Switch, Route } from 'react-router-dom';
import Signin from '../pages/Signin';
import Signup from './../pages/Signup';
import Dashboard from '../pages/Login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/cart" component={Signup} />
      <Route path="/login" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
