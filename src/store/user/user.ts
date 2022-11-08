import {AuthorizationStatus} from '../../const';
import {ActionType, Actions} from '../../types/action';
import {UserStateType} from '../../types/state';

const initialState: UserStateType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {},
}

const user = (state: UserStateType = initialState, action: Actions): UserStateType => {
  switch (action.type) {
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.SetUserData:
      return {...state, user: {email: action.payload.email}};
    default:
      return state;
  }
}

export {user};
