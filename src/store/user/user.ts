import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, requireLogout, setUserData} from '../../store/action';
import {UserStateType} from '../../types/state';
import {AuthorizationStatus} from '../../const';

const initialState: UserStateType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {},
};

export const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(setUserData, (state, action) => {
      state.user = {email: action.payload.email};
    })
});
