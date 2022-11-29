import {RouteProps, Navigate} from 'react-router-dom';

type PrivateRouteProps = RouteProps & {
  isLoggedIn: boolean,
  url: string,
  children: JSX.Element,
}

function PrivateRoute({isLoggedIn, url, children}: PrivateRouteProps): JSX.Element {
  if (isLoggedIn) {
    return children;
  }

  return <Navigate to={url} />;
};

export default PrivateRoute;
