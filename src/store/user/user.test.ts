import {user} from './user';
import {
  requireAuthorization,
  requireLogout,
  setUserData
} from '../../store/action';
import {UserStateType} from '../../types/state';
import {AuthorizationStatus} from '../../const';

const state: UserStateType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {},
};

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should change authorizationStatus by require authorization', () => {
    expect(user(state, requireAuthorization(AuthorizationStatus.NoAuth)))
      .toEqual({...state, authorizationStatus: AuthorizationStatus.NoAuth})
  })

  it('should change authorizationStatus to NO_AUTH by require logout', () => {
    expect(user(state, requireLogout()))
      .toEqual({...state, authorizationStatus: AuthorizationStatus.NoAuth})
  })
  
  it('should change user data by set user data', () => {
    expect(user(state, setUserData({email: 'test@test.com'})))
      .toEqual({...state, user: {email: 'test@test.com'}})
  })
});