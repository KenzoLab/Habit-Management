import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        );
      }}
    />
  );
};

export default Route;
