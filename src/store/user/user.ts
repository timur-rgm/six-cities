import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, requireLogout, setUserData} from '../../store/action';
import {AuthorizationStatus} from '../../const';
import {UserStateType} from '../../types/state';

const initialState: UserStateType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {},
}

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(setUserData, (state, action) => {
      state.user = {email: action.payload.email};
    })
})

export {user};
