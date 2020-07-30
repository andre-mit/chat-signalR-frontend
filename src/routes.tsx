import React, { useContext } from "react";
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect,
  RouteProps,
} from "react-router-dom";

import AuthContext from "./contexts/auth";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Rooms from "./pages/Rooms";
import Signup from "./pages/Signup";
import Header from "./components/Header";

interface Props {
  component: React.FC | RouteProps | any;
  path: string;
  exact: boolean;
}

const Routes = () => {
  const { signed } = useContext(AuthContext);

  const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        signed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
  const AnonymousRoute: React.FC<Props> = ({
    component: Component,
    ...rest
  }) => (
    <Route
      {...rest}
      render={(props) =>
        !signed ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <PrivateRoute path="/chat/:roomId" component={Chat} exact />
        <PrivateRoute path="/rooms" component={Rooms} exact />
        <AnonymousRoute path="/signup" component={Signup} exact />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
