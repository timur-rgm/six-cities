import {useSelector} from 'react-redux';
import {RouteProps, Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selectors';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element,
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Login} />
  }

  return children;
}

export default PrivateRoute;
