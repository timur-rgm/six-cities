import {RouteProps, Navigate} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {RootStateType} from '../../store/root-reducer';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selectors';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element,
}

const mapStateToProps = (state: RootStateType) => ({
  authorizationStatus: getAuthorizationStatus(state),
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