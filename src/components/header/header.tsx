import {useDispatch, useSelector} from 'react-redux';
import {getAuthorizationStatus, getUserData} from '../../store/user/selectors';
import {logoutAction} from '../../store/api-actions';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import {AppDispatch} from '../../types/state';

function Header() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const user = useSelector(getUserData);

  const dispatch: AppDispatch = useDispatch();
  
  return (
    <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              {authorizationStatus === AuthorizationStatus.Auth 
                ? <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <Link
                        className="header__nav-link header__nav-link--profile"
                        to="/favorites"
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">{user.email}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        onClick={() => dispatch(logoutAction())}
                        to="/"
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </ul>
                
                : <Link to="/login" className="header__nav-link">
                    <span className="header__signout">Sign in</span>
                  </Link>
              }
            </nav>
          </div>
        </div>
      </header>
  )
}

export default Header;