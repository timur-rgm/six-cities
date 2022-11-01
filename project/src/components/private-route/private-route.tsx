import {Route, RouteProps, Navigate, NavigateProps} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element,
}

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;
type ConnectedComponentPropsType = PropsFromReduxType & PrivateRouteProps;

function PrivateRoute(props: ConnectedComponentPropsType): JSX.Element {
  const {children, authorizationStatus} = props;

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Login} />
  }

  return children;
}

export default connector(PrivateRoute);
