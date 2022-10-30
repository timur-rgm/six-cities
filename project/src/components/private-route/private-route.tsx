import {Route, Redirect, RouteProps} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
}

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;
type ConnectedComponentPropsType = PropsFromReduxType & PrivateRouteProps;

function PrivateRoute(props: ConnectedComponentPropsType): JSX.Element {
  const {exact, path, render, authorizationStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={AppRoute.Login} />   
      )}
    />
  );
}

export default connector(PrivateRoute);
